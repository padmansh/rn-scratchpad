import * as React from "react";
import Svg, { Mask, Circle, G, Path } from "react-native-svg";
const Avatar2 = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={1300}
    height={1300}
    viewBox="0 0 1300 1300"
    fill="none"
    {...props}
  >
    <Mask
      id="a"
      width={1296}
      height={1296}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <Circle cx={647.869} cy={647.869} r={647.869} fill="#D9D9D9" />
    </Mask>
    <G mask="url(#a)">
      <Path
        fill="#fff"
        d="M1003.04 1182.75c-2.97 2.12-6.373 4.24-9.347 6.37-3.398 2.12-6.372 4.25-9.771 5.95-2.974 1.69-5.523 3.39-8.497 5.09-.425.43-.849.43-1.274.85-9.771 5.95-19.968 11.47-30.164 16.57a97.023 97.023 0 0 1-9.346 4.68s-.425.42-.85.42l-10.196 5.1c-6.797 3.4-14.019 6.37-20.817 9.34-3.398 1.7-7.222 2.98-10.621 4.25-3.398 1.28-7.222 2.98-10.621 4.25-3.398 1.28-7.222 2.97-10.621 4.25h-.424c-3.399 1.27-7.223 2.55-10.621 3.82-7.647 2.55-15.719 5.1-23.366 7.65-2.549.85-5.523 1.7-8.072 2.55a254.387 254.387 0 0 1-24.216 6.37c-2.974.85-5.948 1.28-9.346 2.13-7.647 1.7-15.719 3.39-23.366 5.09-1.7.43-2.974.43-4.673.85-2.55.43-5.523.85-8.072 1.28-3.824.42-7.223 1.27-11.046 1.7-1.7.42-3.399.42-5.098.85-2.124.42-4.673.85-7.222.85-6.798.85-14.02 1.7-20.817 2.55-2.125.42-4.674.42-6.798.85h-.425c-2.973.42-5.947.42-8.921.84-2.974.43-5.948.43-8.922.43-1.699 0-3.823.42-5.523.42-3.398 0-6.372.43-9.346.43-4.248 0-8.072.42-12.32.42h-21.242c-179.281-2.54-340.294-78.59-455.425-199.24 0 0 0-.43-.425-.43-12.745-11.47-1.699-72.65 49.706-111.306 64.575-48.856 219.216-79.444 219.216-79.444s59.902-9.772 282.091 36.536c130 27.189 228.987 66.694 284.218 173.754 11.47 22.1 22.94 56.08-17.42 73.93Z"
      />
      <Path
        fill="#000"
        d="M737.517 930.392c81.569 16.569 168.66 34.412 235.784 88.368 22.517 18.27 37.389 45.03 49.709 70.95 5.95 12.74 11.89 25.91 16.57 39.93 2.54 9.35 6.37 19.97 4.24 31.01-.42 2.98-2.97 6.8-5.09 8.93-9.77 9.77-20.4 15.71-31.02 23.36-62.448 43.33-134.245 73.92-208.592 90.07-165.686 36.11-344.967 8.07-490.686-79.02-48.431-29.32-93.039-65-131.274-107.06-4.249-5.1-4.249-13.6-4.249-19.12.425-12.74 3.824-25.06 8.072-36.54 10.196-26.34 23.366-52.675 45.882-70.943 16.144-11.046 33.563-20.392 51.406-28.039 56.078-23.791 115.13-40.36 175.882-47.157 5.098-.425 5.948 6.797.85 7.647-58.203 11.895-115.981 29.738-169.935 53.954-19.542 9.771-40.359 18.268-56.078 33.562-14.87 16.146-25.491 36.116-33.987 56.506-5.523 12.32-9.347 31.86-7.647 41.63 26.764 31.86 58.202 59.9 92.189 84.12 186.079 130 468.595 138.5 666.569 30.16 17.843-9.77 35.261-20.81 51.83-32.29 8.068-5.52 16.568-10.19 22.938-16.56.43-.43 0 0 0 .42 0 .43-.42.85-.42.85.42-5.1-1.28-11.89-3.4-18.69-7.65-24.64-19.968-50.56-33.138-73.07-20.817-33.57-56.078-54.81-91.764-71.801-24.641-11.471-50.556-20.392-76.896-28.889-26.34-8.497-53.104-15.719-79.869-22.092-6.797-1.699-4.673-11.47 2.124-10.196Z"
      />
      <Path
        fill="#000"
        d="M1144.09 1446.14H69.674s12.745-185.23 77.321-325.85c22.941-49.7 40.784-121.924 82.843-154.637 48.431-37.385 144.019-60.751 178.006-67.549 25.066-5.098 28.464-.424 45.883-5.098 0 2.125.424 3.824.424 5.948 0 0 45.883 136.376 165.262 184.806 97.288 39.51 155.065 13.17 163.987-30.59 5.523-28.04-11.896-73.922-20.817-88.791-5.098-4.248-8.497-10.621-10.196-16.994l-3.399-14.019c8.072-1.7 15.719-3.824 23.366-6.373 2.549-.849 4.673-1.699 7.222-2.549 61.602 17.419 136.373 48.856 201.798 98.566 35.686 27.19 65.426 97.28 101.956 215.81 42.91 136.38 60.76 207.32 60.76 207.32Z"
      />
      <Path
        fill="#000"
        d="M818.238 1031.08c-1.274-11.9-3.399-22.52-5.523-31.865-8.921-41.634-35.686-78.169-35.686-78.169s-67.124-46.308-170.784-58.628c-103.661-12.32-154.216 0-154.216 0-7.647 2.549-16.994 7.647-25.49 12.32-15.294 8.922-27.615 21.667-35.262 37.386 0 .425-.425.425-.425.85-11.045 31.862 45.883 149.546 192.451 215.396 151.242 67.97 245.131-11.47 234.935-97.29Z"
      />
      <Path
        fill="#fff"
        d="M280.395 1693.83c-5.523-124.48-8.072-255.76-9.771-380.66-.85-48.43-2.974-97.29 8.922-144.87 18.268-79.44 73.496-153.79 152.516-179.704l-2.974 2.974c8.922-22.516 18.693-47.582 40.36-60.752.849-.424 1.274.85.849 1.275-14.869 10.196-22.941 27.614-29.738 44.183-2.549 5.523-3.824 12.32-6.373 17.418-29.738 11.046-56.078 30.166-77.745 52.676-21.667 22.95-39.085 50.13-50.555 79.45-14.87 36.96-21.242 76.47-22.517 115.98-.85 149.12 3.399 306.73-2.974 452.03Zm189.051-.01c-8.497-77.74-13.595-157.61-14.445-235.78-.849-71.8 1.275-145.72 9.772-217.09 4.673-41.64 19.542-136.8 50.555-164.41l3.399-2.55c2.124-.85 2.549-1.7 5.523-2.13l-4.249 4.25c2.125-16.14 8.072-31.44 16.569-45.03 2.974-4.25 5.948-8.5 9.346-12.75.425-.42 1.7 0 .85.85-2.974 4.25-5.948 8.5-8.072 13.17-7.222 13.6-12.32 28.47-13.595 43.76 0 .43-.424.43-.424.85-2.549.85-5.523 2.97-7.648 5.52-6.372 6.8-10.62 16.57-14.444 25.07-5.948 14.87-10.196 31.01-13.595 47.16-8.496 41.2-13.17 84.54-16.568 126.6-4.674 70.52-6.373 145.29-6.373 215.81l.425 39.51c0 52.26 2.549 104.94 3.823 157.19.425.43-.849.85-.849 0Zm174.606 0c.425-129.57-5.098-259.57-5.523-389.15-.424-58.62-.424-118.95.85-177.58 3.824-15.29 6.797-31.44 8.072-47.58.425-5.1.425-10.62 0-16.14 0-.85 1.275-.85 1.275 0 3.398 21.24.849 42.9-3.399 64.15 1.699 46.3 3.399 94.31 4.248 141.47 2.974 106.21 3.824 212.42 1.275 318.62-.425 20.4-1.7 50.56-2.974 70.95-.85 11.9-2.124 23.37-2.974 35.26 0 .43-.425.43-.85.43v-.43Zm198.825 0c-3.824-98.13-6.373-200.94-14.87-298.66-5.098-62.02-13.17-123.2-25.065-183.95-7.222-36.54-16.569-73.5-31.438-107.91-2.549-19.54-8.922-40.78-24.216-54.38-.424-.42-.424-.85 0-.85.425-.42.425-.42.85 0 4.248 2.98 8.072 6.8 11.471 11.05 9.346 12.32 15.294 29.31 17.418 43.33 17.418 33.56 27.189 70.1 36.111 106.63 5.523 23.8 10.621 49.71 14.445 73.5 5.522 33.99 10.62 77.32 13.169 111.73 2.125 20.82 3.399 53.53 4.674 74.77 1.699 50.14 2.124 99.84 1.274 149.97l-2.124 74.77c0 .43-.425.43-.85.43s-.849-.43-.849-.43Zm159.733-.42c10.62-116.41 6.38-234.51-10.192-350.07-4.249-30.16-10.621-61.6-17.418-91.34-8.072-29.31-17.844-59.05-31.014-86.24-9.346-20.82-21.666-40.78-33.986-59.9-16.994-24.22-38.661-49.28-62.027-67.55-11.895-9.77-24.64-19.12-38.235-25.91-6.797-8.93-11.046-17.848-20.817-26.344-7.647-7.223-16.993-13.17-27.614-13.595-.425 0-.85-.425-.85-.85s.425-.425.425-.425c5.523-.424 11.046 1.275 16.144 3.399 14.869 7.222 25.915 20.392 34.836 33.985 59.053 27.62 105.785 83.69 136.798 141.47 12.32 24.64 23.366 50.13 31.013 76.47l6.797 22.52c20.39 84.12 28.46 170.78 29.74 257.03.42 62.87-2.98 125.75-12.75 187.77 0 .43-.42.43-.85.43v-.85Z"
      />
      <Path
        fill="#fff"
        d="M811.44 1204.84c59.478 2.12 103.661-17 110.458-81.15.425-5.1 4.248-8.92 8.922-9.77 25.915-6.37 43.333-29.31 48.431-55.23 1.274-4.25 1.699-9.77 2.549-14.02.425-4.67.85-9.77 1.274-14.87 0-.42.425-.42.85-.42s.425.42.425.42c.85 8.93 1.699 20.82.85 29.74-1.7 30.17-21.667 58.63-51.83 66.7l.849-.85c-3.398 47.16-32.287 81.57-80.719 84.54-14.019 1.28-28.464 0-42.483-3.39-.425 0-.425-.43-.425-.85 0-.85.425-.85.849-.85Zm-593.497-195.85c4.673 24.21 18.692 48 39.934 60.75 1.699 1.27 5.523 2.97 7.222 4.25 3.824 1.7 8.072 3.4 11.896 4.67l8.072 2.12c2.124.85 5.947 1.28 8.496 1.7l8.497 1.28c8.497 1.27 21.667-3.4 25.915 6.37 28.039 59.48 82.843 104.51 151.667 91.34 4.248-.42 8.497 1.27 10.196 5.1 3.823 5.95 8.922 12.32 13.595 17.84 24.215 28.89 60.751 50.13 99.411 42.06 15.295-2.97 30.164-9.35 43.759-17.84.424-.43.849 0 .849 0-59.902 49.7-127.026 23.36-167.81-36.11l1.274.42c-16.993 2.97-34.411 3.82-51.83.43-50.98-9.35-90.065-52.68-110.457-99.84l.849.42c-8.921-.42-18.692-.85-27.614-2.97-2.549-.42-6.797-1.27-8.921-2.12-5.099-1.28-12.746-4.25-17.419-6.8l-4.248-2.13-3.824-2.54c-1.699-1.28-5.947-3.4-7.647-5.1-19.542-15.3-31.013-39.51-33.562-63.73 0-.42.425-.85.425-.85 1.275.85 1.275.85 1.275 1.28Zm579.052 144.44c50.98-13.59 76.045-43.33 68.398-96.86-.425-3.4.425-6.8 2.549-8.92 14.02-16.57 17.843-39.09 15.719-60.33-.425-6.797-2.974-16.568-4.248-23.366 0-.425 0-.85.425-.85.424 0 .424.001.849.425 3.399 7.223 6.798 14.87 8.922 22.517 4.248 15.714 4.248 32.714-.85 48.004-2.549 7.65-6.372 15.3-11.47 21.67l.424-.85c7.223 38.23-5.522 77.74-44.183 92.61-11.47 4.68-23.79 7.23-36.111 7.65-1.274-.42-1.274-1.7-.424-1.7Z"
      />
      <Path
        fill="#fff"
        d="M316.929 944.411c-6.797 22.092.85 46.732 17.419 62.449l2.124 2.55 2.549 2.13c5.098 4.24 11.046 8.07 16.568 11.89l11.896 6.37c2.549 1.28 4.248 3.83 4.673 6.8 8.497 31.86 34.412 56.93 63.726 70.52 18.692 9.77 39.085 14.45 59.477 18.27 5.947 1.28 7.647 6.8 11.895 10.62 4.673 4.68 9.771 9.35 14.869 13.6 31.014 26.34 72.648 40.36 113.432 34.83l10.621-1.27c.425 0 .849 0 .849.42 0 .43 0 .43-.424.85-41.21 12.75-86.667 4.68-122.353-19.96-10.621-7.23-25.491-19.55-31.438-27.62-28.464-4.67-57.353-13.17-81.144-29.74-22.941-15.29-45.458-44.18-48.431-69.24-7.223-4.25-17.844-11.05-24.216-16.15-1.275-.85-6.798-6.37-8.072-7.65-2.124-2.54-5.098-5.52-6.797-8.49-12.746-17.845-16.994-42.061-8.072-62.453 0-.425.424-.425.849-.425.425.85.425 1.274 0 1.699Zm74.347-31.862c-.85 19.542 6.372 39.085 19.117 53.529 2.549 3.399 6.798 7.223 10.196 10.196 1.275.85 5.523 4.249 6.798 5.098 4.248 3.399 11.895 5.098 12.32 11.046 1.274 9.342 5.948 19.122 11.471 26.762 17.418 25.49 47.581 39.09 76.895 47.58 2.549.85 4.248 2.13 5.523 4.25 25.915 32.72 68.823 49.71 110.033 45.46 7.222.43 13.594 4.25 21.241 5.52 16.144 4.25 33.987 6.38 50.556 5.1 22.091-.85 42.484-10.19 53.529-29.31 2.125-2.98 5.098-3.4 7.647-5.53 11.896-8.07 21.667-19.11 27.615-32.28 7.647-15.72 5.947-33.56 1.699-49.71.85-6.8 2.124-14.443 1.7-22.09-.425-21.242-8.922-42.059-22.517-58.628-.85-.424.425-1.699.85-.849 21.242 20.817 31.013 51.83 26.765 81.147 13.594 35.26-2.125 73.92-35.262 94.31-10.196 19.97-36.961 33.99-60.752 34.84-23.366 2.12-51.405-2.98-71.372-9.77-45.458 4.67-93.039-14.87-120.654-51.83l.425.42c-9.346-2.97-22.091-7.65-30.588-11.9-2.124-1.27-8.922-4.67-11.046-5.94-2.549-1.7-8.072-5.1-10.196-6.8l-6.373-5.1c-16.993-14.02-30.588-33.14-33.562-55.227l.425.85c-3.398-2.549-6.797-4.674-9.771-7.223l-4.673-3.823-2.124-2.124c-2.125-2.124-4.249-4.673-6.373-6.373-3.823-4.673-7.647-9.771-10.621-14.869-7.647-14.02-11.47-30.588-9.346-46.732 0-.425.425-.425.849-.425-.849 0-.424 0-.424.425ZM755.07 1180.47c.142-12.2-9.443-22.2-21.408-22.34-11.965-.14-21.779 9.64-21.921 21.83-.142 12.2 9.443 22.21 21.408 22.35 11.965.14 21.779-9.64 21.921-21.84Z"
      />
      <Path
        fill="#fff"
        d="M780 1237.97c2.974 22.52-11.896 43.34-33.138 45.88-21.241 2.55-40.784-13.17-43.758-36.11-2.974-22.51 10.621-53.53 31.863-56.5 21.242-2.55 42.059 23.79 45.033 46.73Z"
      />
      <Path
        fill="#fff"
        d="M724.769 1210.78c-11.046 8.92-40.785 9.77-52.68 1.28-14.869-11.47.85-49.28 11.046-61.18.424-.42 1.274-.42 1.274.43l-3.823 24.64c-.85 8.07-2.549 16.56-1.7 24.21 0 1.7 1.7 2.55 3.399 2.98 11.471 4.24 23.791 5.52 36.111 6.79 1.699 0 4.673.43 5.948-.42 0 .42.425.85.425 1.27Z"
      />
      <Path
        fill="#fff"
        d="M721.372 1235.85c-16.143 11.47-33.987 16.57-53.954 14.44-1.274 0-3.824-.85-5.098-1.27-20.392-6.8-27.19-31.86-22.941-50.98 0-.85.85-1.28 1.274-.43 4.674 14.87 11.046 36.54 28.464 39.51 8.497 1.28 17.419.85 25.915 0 8.497-.85 17.419-1.7 25.915-3.4.85.43 1.275 1.28.425 2.13.425-.43 0 0 0 0Zm-5.948 20.82c-9.346 4.24-17.843 7.64-24.64 11.89-5.098 3.4-8.497 5.95-10.621 11.47-2.549 6.8-2.124 14.87-1.699 24.22.849 8.49 2.124 17.84 2.549 28.04 0 .42-.85.85-1.275.42-13.595-21.67-25.915-63.3 7.222-73.5 8.922-2.97 18.693-3.82 28.04-3.39 1.274-.43 1.274.85.424.85Zm10.621 13.59c-1.699 11.05-5.948 18.69-2.549 27.19 5.948 12.32 11.046 25.06 11.046 39.93 0 .43-.85.85-.85.43-3.823-5.1-7.647-10.62-11.47-16.15-4.674-8.49-11.896-16.99-11.896-27.18.425-10.2 7.222-19.12 14.445-25.49 1.274-.43 1.699.42 1.274 1.27Zm24.214-63.73c2.124-2.12 6.798-5.94 9.347-8.07 6.797-5.52 16.143-11.47 22.941-16.99.425-.43.85-.85.425 0-.425.42-.85 1.27-1.275 2.12-.425 1.28-.85 2.13-.425 3.4-3.823-15.29-8.496-30.16-7.647-46.73v-.42c0-.43.85-.85 1.275-.43 5.523 11.05 11.046 22.52 15.294 33.99 1.699 4.25 3.823 8.92 3.823 14.02-.424 2.12-2.124 2.97-3.398 4.25-5.098 3.82-11.046 6.37-16.569 8.92-2.974 1.27-25.065 10.62-24.216 6.37 0-.43.425-.43.425-.43Zm8.921 22.95c15.295-9.78 33.138-14.02 48.432-20.4 4.248-2.55 6.372-6.79 8.921-11.89 3.824-6.8 6.798-15.3 11.046-24.22 0-.42.425-.42.85-.42 1.274 13.17-.425 27.61-7.222 39.51-7.223 12.32-23.366 13.17-36.111 15.72-8.922 1.27-17.419 2.55-26.34 2.97-.425 0-.425-.85.424-1.27Zm10.62 18.69c33.137-27.62 73.497-5.95 66.275 37.38-1.7 10.2-5.523 19.97-12.745 28.04-.425.43-1.275 0-1.275-.42 1.275-4.68 2.124-8.92 2.549-13.6 4.248-31.43-3.823-58.2-41.209-52.68-4.673.43-9.347 1.28-13.595 2.55-.425.43-.85-.85 0-1.27Z"
      />
      <Path
        fill="#fff"
        d="M763.854 1264.31c14.869-1.7 31.013 9.77 31.438 26.34-.85 17-8.497 32.29-22.517 42.49-.424.42-1.274.42-1.274-.43 4.248-12.32 8.497-24.64 10.621-37.38 1.699-6.38 0-12.33-4.249-17.42-3.823-4.68-8.921-8.92-14.444-12.32-.85-.85-.425-1.7.425-1.28Zm13.595-220.91c-8.922 43.76-66.7 70.1-163.987 30.59-101.111-40.79-144.869-138.075-155.915-166.963 59.902-112.157 18.268-189.902 18.268-189.902C613.887 705.229 734.54 866.667 734.54 866.667l18.693 79.869c1.7 6.798 5.098 12.745 10.196 16.994 8.922 15.719 19.543 51.83 14.02 79.87Z"
      />
      <Path
        fill="#000"
        d="M455.424 908.301c8.072-12.32 13.17-26.765 16.569-40.784 6.372-29.314 8.497-59.052 8.921-88.791V767.68c-1.274-11.046-5.098-22.516-9.346-32.712-5.523-13.595 14.444-22.092 20.817-8.497.85 1.699.85 4.673.85 6.373 1.274 57.777 3.823 132.124-32.713 180.13-2.549 2.549-7.647-1.274-5.098-4.673Zm283.789-42.483c6.373 3.823 8.497 8.921 9.347 14.019 2.549 10.196 1.699 21.242 4.248 31.863 2.124 10.196 8.497 19.967 10.196 30.588 2.125 11.046 8.497 34.412 11.046 45.883.85 2.549-.85 5.522-3.823 5.947-1.7.425-2.974 0-4.249-.849-5.523-4.674-8.072-9.347-11.47-15.295-5.523-10.196-9.347-19.542-12.745-31.013-2.974-10.196-1.7-21.241-4.249-31.862-2.124-10.196-8.072-19.968-10.196-30.589-1.274-5.098-1.699-10.62 2.124-16.993 2.549-2.549 6.798-3.399 9.771-1.699Z"
      />
      <Path
        fill="#000"
        d="M769.803 977.974c-81.144-4.248-147.418-29.738-211.993-144.869 54.379 48.007 118.529 66.274 186.078 74.771l8.922 39.085c1.699 6.798 11.895 26.765 16.993 31.013Z"
      />
      <Path
        fill="#000"
        d="M766.406 962.255c14.445 27.19 22.942 61.175 14.02 91.345-6.797 21.24-26.34 36.96-47.582 42.9-49.281 13.17-106.209-7.64-149.967-31.01-53.954-30.16-93.889-80.718-119.379-135.947-1.7-4.248 4.248-7.647 6.797-3.399 8.922 17.843 19.118 35.262 30.588 50.981 11.471 16.143 24.641 31.015 39.51 44.185 43.334 39.08 101.961 63.3 160.589 63.3 60.326-1.7 83.268-33.56 69.248-92.191-2.124-9.347-5.523-19.118-10.196-27.19-2.549-3.399 3.823-7.222 6.372-2.974Z"
      />
      <Path
        fill="#fff"
        d="M930.817 452.027c7.647 35.686 11.47 64.575-9.347 159.738-20.392 94.739 29.314 114.281-88.366 265.948-48.006 62.026-164.412 44.608-258.725-19.543-31.863-21.666-45.458-77.32-69.249-116.83-18.692-31.013-27.189 1.275-51.83-25.49-33.562-36.536-73.921-110.032-53.954-240.032 32.288-210.719 199.248-235.36 322.876-211.994 124.477 23.791 188.202 94.314 208.595 188.203Z"
      />
      <Path
        fill="#000"
        d="M474.542 753.66c-9.771-16.568-22.517-31.013-34.412-46.307-11.471-15.719-20.817-33.137-28.464-50.98-50.556-124.052-31.013-298.66 93.039-371.732 51.405-29.739 113.432-36.961 171.209-32.288 123.628 8.922 237.059 65.85 263.824 196.7 14.444 57.777-5.098 117.255-16.144 173.758-5.098 28.039-.85 56.928-1.274 85.817-.425 29.314-8.497 58.627-19.543 85.817-6.797 18.693-18.693 35.261-31.013 50.555-20.392 24.641-40.784 49.706-66.699 68.824-5.948 4.248-16.569 6.372-23.791 7.222-19.968 2.974-39.51 3.824-59.477 2.549-78.17-3.399-161.863-41.209-193.301-116.83-1.274-2.974 2.974-5.098 4.673-2.549 40.785 64.575 115.556 96.438 189.902 100.686 22.941 1.275 46.307.85 68.824-3.823 11.045-5.523 20.817-15.294 30.163-24.216 22.941-22.941 46.307-47.582 62.876-75.621 19.967-37.81 31.013-79.019 27.614-121.928-.849-19.118-1.274-39.085 2.549-58.203 3.399-19.117 7.647-37.385 10.196-56.928a420.83 420.83 0 0 0 3.824-56.503c-2.124-54.804-19.967-111.307-54.804-153.791-76.895-95.588-258.725-120.653-361.111-55.228-64.575 39.934-94.739 114.705-104.51 187.352-14.869 87.092-10.621 172.909 58.628 236.21l20.392 21.241c8.072 9.347-6.373 20.393-13.17 10.196Z"
      />
      <Path
        fill="#fff"
        d="M524.671 618.562s-13.17-63.725-75.196-56.078c-53.53 6.797-72.222 135.098 49.281 170.784"
      />
      <Path
        fill="#000"
        d="M493.234 677.615c-9.771-5.523-16.568-14.869-16.993-26.34.425-8.497 1.699-18.268-.425-26.765-1.275-8.072-9.771-10.196-16.144-9.771-6.797 1.275-11.046 9.771-12.32 16.569 0 .425-.425 1.699-.425 2.124-.425 2.124-3.824 2.124-4.673 0-5.523-16.569 6.797-34.837 24.64-32.712 25.066 1.699 28.464 28.039 23.791 48.006-2.549 8.497.85 16.144 5.523 23.366l.85 1.275c2.124 2.549-1.275 5.947-3.824 4.248ZM833.102 573.53c6.373 30.163 18.268 58.202 33.138 84.542 13.17 32.288-20.817 62.876-50.981 61.601-3.398 0-3.823-4.673-.849-5.522 19.117-5.948 36.536-18.693 39.509-38.236 1.275-5.947-.424-11.045-3.398-16.143-14.02-26.34-22.517-56.504-20.392-86.242 0-2.125 2.973-2.125 2.973 0Z"
      />
      <Path
        fill="#000"
        d="M522.549 618.988c-9.772-25.066-31.013-48.857-59.477-48.432-2.549-.425-6.798.425-9.347.425-7.222.425-13.17 2.974-18.693 8.072-27.189 27.189-22.516 75.196-.424 105.359 7.647 10.621 17.418 19.968 28.464 27.615 11.045 7.647 23.366 13.595 36.536 18.693 2.973.849 1.699 5.522-1.275 5.098-28.464-5.948-55.654-19.968-74.346-43.334-28.889-34.836-34.837-93.039-.425-127.026 7.647-6.797 18.268-11.895 28.889-11.895 3.398 0 8.496-.85 11.895 0 17.843.849 34.837 9.771 45.882 23.791 9.772 11.895 15.295 26.339 16.994 40.784 0 2.549-3.824 3.399-4.673.85Zm278.269 143.169c-27.19 25.915-78.595 5.098-92.19-26.34-1.699-3.824 2.549-7.222 5.948-5.523 7.222 3.824 13.595 7.647 20.392 10.621 19.542 8.922 39.935 16.144 61.601 14.02 4.249-.85 7.222 4.248 4.249 7.222ZM674.641 616.863c-10.196-.425-17.843-8.922-16.994-19.118l.425-11.895c.425-10.196 8.922-17.843 19.118-16.994 10.196.425 17.843 8.922 16.993 19.118l-.424 11.896c-.425 9.771-8.922 17.418-19.118 16.993Zm178.855 6.373c-9.347-.425-16.569-8.497-16.144-17.843l.425-11.046c.424-9.346 8.496-16.568 17.843-16.144 9.346.425 16.568 8.497 16.143 17.843l-.424 11.046c-.425 9.347-8.497 16.569-17.843 16.144Z"
      />
      <Path
        fill="#000"
        d="M712.876 593.922c-14.02-9.346-29.314-15.719-46.307-12.32-5.523.849-11.046 2.549-14.445 6.372-1.274 1.7-4.248 1.275-4.248-1.274.425-8.497 7.647-14.02 14.444-17.419 13.17-6.797 31.438-5.522 43.334 3.399 4.248 2.549 18.693 18.268 11.046 21.667-1.7.849-2.549.425-3.824-.425Zm121.504 2.124c0-17.843 22.091-24.216 35.686-17.843 7.647 3.399 13.17 10.196 15.294 18.268.85 2.549-2.974 4.673-4.673 2.549-7.222-8.497-19.542-12.745-29.314-7.647-2.973 1.699-3.398 2.974-4.248 4.673 0 8.497-12.32 8.072-12.745 0Zm-101.111-72.222c8.921 2.974 17.843-5.098 16.143-14.869-.849-5.098-2.974-10.196-7.222-14.02-12.745-11.471-65.425-21.667-97.288-6.797-28.039 13.594 47.582 22.091 88.367 35.686Zm127.027 6.797c-7.222 2.549-14.869-5.098-13.594-14.019.425-4.674 2.124-9.347 5.523-12.745 10.196-10.197 45.032-18.268 67.124-2.549 19.117 13.169-25.915 16.993-59.053 29.313Z"
      />
      <Path
        fill="#000"
        d="M972.452 362.81C950.36 174.183 763.007 110.457 799.118 236.209c0 0-49.281-79.02-160.163-83.268-95.163-3.399-37.386 64.15-37.386 64.15s-73.921-42.483-199.248 21.242c-109.183 55.654-8.072 104.51-8.072 104.51s-82.418 43.758-83.693 138.072c-.425 24.64 19.968 62.451 68.399 50.131-12.32 93.888 45.033 170.784 71.373 202.222 33.986 40.784 36.96 71.797 36.96 71.797 17.419-9.771-2.974-53.529-2.549-76.47-106.209-40.785-87.091-159.314-35.261-166.112 54.379-6.797 71.372 41.634 74.346 53.53 8.922-10.621 11.471-51.83 16.569-95.588 15.719-5.098 29.738-10.621 41.209-17.844 45.033-26.764 66.275-73.071 112.157-100.261 80.294-48.007 101.111 60.327 144.02 20.392 49.705-45.882 85.817-9.346 96.862 47.157 4.249 20.392 30.164 18.693 33.987-1.699 5.948-29.739 8.497-65.425 3.824-105.36Z"
      />
    </G>
  </Svg>
);
export default Avatar2;