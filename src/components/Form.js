/** @jsxRuntime classic */
/** @jsx jsx */
import { Fragment, useState } from 'react';
import { jsx } from 'theme-ui';
import { Label, Input, Box, Textarea, Button, Text } from 'theme-ui';
import { useForm } from 'react-hook-form';
import { validatePhoneNumber } from 'utils/formValidators';
import toast, { Toaster } from 'react-hot-toast';

const Form = () => {
  const [isSending, setIsSending] = useState(false);
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    setIsSending(true);
    try {
      const response = await fetch('/api/nodemailer', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const responseData = await response.json();

      if (responseData.error) {
        throw new Error(responseData.error);
      }

      toast.success('Dziękuję za wiadomość, odezwę się jak najszybciej!');
      reset();
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <Fragment>
      <Box as="form" onSubmit={handleSubmit(onSubmit)} sx={styles.form}>
        <Box sx={styles.form.group}>
          <Label htmlFor="name">imię i nazwisko</Label>
          <Input name="name" id="name" {...register('name', { required: true, minLength: 3 })} />
          {errors.name && (
            <Text as="p" variant="error">
              Podaj przynajmniej 3 znaki
            </Text>
          )}
        </Box>
        <Box sx={styles.form.group}>
          <Label htmlFor="email">e-mail</Label>
          <Input
            name="email"
            id="email"
            {...register('email', {
              required: true,
              pattern:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i,
            })}
          />
          {errors.email && (
            <Text as="p" variant="error">
              Uzupełnij pole - np. jankowalski@gmail.com
            </Text>
          )}
        </Box>
        <Box sx={styles.form.group}>
          <Label htmlFor="phone">telefon</Label>
          <Input
            name="phone"
            id="phone"
            {...register('phone', { required: true, validate: validatePhoneNumber })}
          />
          {errors.phone && (
            <Text as="p" variant="error">
              Uzupełnij pole - np. +48XXXXXXXXX
            </Text>
          )}
        </Box>
        <Box sx={styles.form.group}>
          <Label htmlFor="message">wiadomość</Label>
          <Textarea
            name="message"
            id="message"
            rows={6}
            {...register('message', { required: true, minLength: 8 })}
          />
          {errors.message && (
            <Text as="p" variant="error">
              Długość wiadomości powinna wynieść przynajmniej 8 znaków
            </Text>
          )}
        </Box>
        <Box sx={styles.form.buttonContainer}>
          <Button type="submit" disabled={isSending}>
            Wyślij
          </Button>
        </Box>
      </Box>
      <Toaster
        toastOptions={{
          duration: 3000,
          position: 'bottom-right',
        }}
      />
    </Fragment>
  );
};

export default Form;

const styles = {
  form: {
    width: '500px',
    '@media screen and (max-width: 570px)': {
      width: '100%',
    },
    group: {
      mb: '20px',
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
  },
};
