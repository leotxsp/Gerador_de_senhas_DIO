export default function generatePass() {
  let randomPassword: string = '';
  let characters:string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?';
  let passwordLength: number = 12;
  
  for(let i = 0; i < passwordLength; i++) {
    let randomIndex: number = Math.floor(Math.random() * characters.length);
    randomPassword += characters.charAt(randomIndex);
  }

  return randomPassword
}