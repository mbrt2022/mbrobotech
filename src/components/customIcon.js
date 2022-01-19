import React from 'react';
import { string, number } from 'prop-types';

export const Facebook = ({ fill = '#000', width = 40, height = 40 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 25.1396C0 37.5687 9.02708 47.9042 20.8333 50V31.9437H14.5833V25H20.8333V19.4438C20.8333 13.1937 24.8604 9.72292 30.5562 9.72292C32.3604 9.72292 34.3062 10 36.1104 10.2771V16.6667H32.9167C29.8604 16.6667 29.1667 18.1937 29.1667 20.1396V25H35.8333L34.7229 31.9437H29.1667V50C40.9729 47.9042 50 37.5708 50 25.1396C50 11.3125 38.75 0 25 0C11.25 0 0 11.3125 0 25.1396Z"
        fill={fill}
      />
    </svg>
  );
};

Facebook.propTypes = {
  fill: string,
  width: number,
  height: number,
};

export const Instagram = ({ fill = '#000', width = 40, height = 40 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M25 1C11.745 1 1.00003 11.745 1.00003 25C1.00003 38.255 11.745 49 25 49C38.255 49 49 38.255 49 25C49 11.745 38.255 1 25 1ZM19.125 34.9475H14.265V19.3075H19.125V34.9475ZM16.665 17.3875C15.13 17.3875 14.1375 16.3 14.1375 14.955C14.1375 13.5825 15.16 12.5275 16.7275 12.5275C18.295 12.5275 19.255 13.5825 19.285 14.955C19.285 16.3 18.295 17.3875 16.665 17.3875ZM36.875 34.9475H32.015V26.28C32.015 24.2625 31.31 22.8925 29.5525 22.8925C28.21 22.8925 27.4125 23.82 27.06 24.7125C26.93 25.03 26.8975 25.48 26.8975 25.9275V34.945H22.035V24.295C22.035 22.3425 21.9725 20.71 21.9075 19.305H26.13L26.3525 21.4775H26.45C27.09 20.4575 28.6575 18.9525 31.28 18.9525C34.4775 18.9525 36.875 21.095 36.875 25.7V34.9475Z"
        fill={fill}
      />
    </svg>
  );
};

Instagram.propTypes = {
  fill: string,
  width: number,
  height: number,
};

Facebook.propTypes = {
  fill: string,
  width: number,
  height: number,
};

export const ArrowIcon = ({ fill = '#000', width = 20, height = 20 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 11 20"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="Rounded" transform="translate(-548.000000, -3434.000000)">
          <g id="Navigation" transform="translate(100.000000, 3378.000000)">
            <g
              id="-Round-/-Navigation-/-arrow_back_ios"
              transform="translate(442.000000, 54.000000)"
            >
              <g>
                <polygon id="Path" opacity="0.87" points="0 0 24 0 24 24 0 24"></polygon>
                <path
                  d="M16.62,2.99 C16.13,2.5 15.34,2.5 14.85,2.99 L6.54,11.3 C6.15,11.69 6.15,12.32 6.54,12.71 L14.85,21.02 C15.34,21.51 16.13,21.51 16.62,21.02 C17.11,20.53 17.11,19.74 16.62,19.25 L9.38,12 L16.63,4.75 C17.11,4.27 17.11,3.47 16.62,2.99 Z"
                  id="🔹-Icon-Color"
                  fill="#1D1D1D"
                ></path>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

ArrowIcon.propTypes = {
  fill: string,
  width: number,
  height: number,
};
