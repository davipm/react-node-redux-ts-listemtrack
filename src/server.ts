import app from "./app";

const PORT = process.env.PORT || 3333;

app.listen(PORT, () =>
  console.log(
    `Server in running ${process.env.NODE_ENV} mode in port ${PORT}`.yellow.bold
  )
);
