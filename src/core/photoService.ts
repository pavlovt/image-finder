import api from './api'
import conf from './conf'

const auth = `&client_id=${process.env.REACT_APP_IMAGE_KEY}`

class PhotoService {
  search(topic: string) {
    return api.get(conf.apis.search + topic + auth)
  }

  get(id: string) {
    return conf.baseUrl + conf.apis.photo + id + auth // api.get(conf.apis.photo + id + auth)
  }
}

const photo = new PhotoService()
export default photo
