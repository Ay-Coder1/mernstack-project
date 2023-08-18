import mongoose from "mongoose";

const CONNECTION = process.env.MONGODB_CONNECTION;
mongoose
  .connect(CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server start at  Port ${PORT}`))
  )
  .catch((error) => console.log(`${error} did not connect`));
