import app from "./src/app";
import env from "./env.config";
const PORT = env.PORT;

app.listen(PORT, () => {
  console.log(`Listening on port http://localhost:${PORT}`);
});
