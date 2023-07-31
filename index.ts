import app from "./api/app"
import config from './api/utils/config'

// const app : App = new App()

app.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`)
})