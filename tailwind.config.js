/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    container: {
      center:true,
    },
    extend: {
      backgroundImage: {
        'druck': "url('https://mdbootstrap.com/img/new/standard/nature/184.jpg')",
        'project': "url('https://mdbootstrap.com/img/new/standard/nature/184.jpg')",
      },
      backgroundColor: {
        'primary': "#737171",
        'accent': '#ffbf00',
      },
      textColor: {
        'accent': '#ffbf00',
      }
    },
  },
  plugins: [],
}
