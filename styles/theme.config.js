import { createGlobalStyle } from 'styled-components';
export const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

* {
   box-sizing: border-box;
 font-family: 'Poppins', sans-serif;
   margin: 0;
   padding: 0;
}

a{
   text-decoration: none;
}

li{
   list-style-type: none;
}

body {
   
   font-weight: 400;
   font-style: normal;
   transition: all 0.50s linear;
}

input, textarea, button {font-family: inherit}




`;
