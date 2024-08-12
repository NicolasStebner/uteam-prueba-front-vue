import axios from 'axios';
import URL_API from './URL_API';

class MarvelService {
  async getCharacters(){
    const rtaAPI = await axios.get(URL_API+"/characters",{
      params:{
        apikey:import.meta.env.VITE_API_KEY,
        ts:import.meta.env.VITE_TS,
        hash:import.meta.env.VITE_HASH
      }
    },
    )
    return rtaAPI.data.data;
  }
  async searchCharacter(value){
    const rtaAPI = await axios.get(URL_API+"/characters",{
      params:{
        apikey:import.meta.env.VITE_API_KEY,
        ts:import.meta.env.VITE_TS,
        hash:import.meta.env.VITE_HASH,
        nameStartsWith: value
      }
    },
    )
    return rtaAPI.data.data;
  }
  async getCharacterById(id){
    const rtaAPI = await axios.get(`${URL_API}/characters/${id}`,{
      params:{
        apikey:import.meta.env.VITE_API_KEY,
        ts:import.meta.env.VITE_TS,
        hash:import.meta.env.VITE_HASH
      }
    },
  )
    return rtaAPI.data.data;
  }
  
  async getComics(){
    const rtaAPI = await axios.get(URL_API+"/comics",{
      params:{
        apikey:import.meta.env.VITE_API_KEY,
        ts:import.meta.env.VITE_TS,
        hash:import.meta.env.VITE_HASH
      }
    },
    )
    return rtaAPI.data.data;
  }

  async searchComic(value){
    const rtaAPI = await axios.get(URL_API+"/comics",{
      params:{
        apikey:import.meta.env.VITE_API_KEY,
        ts:import.meta.env.VITE_TS,
        hash:import.meta.env.VITE_HASH,
        titleStartsWith: value
      }
    },
    )
    return rtaAPI.data.data;
  }

  async getComicById(id){
    const rtaAPI = await axios.get(`${URL_API}/comics/${id}`,{
      params:{
        apikey:import.meta.env.VITE_API_KEY,
        ts:import.meta.env.VITE_TS,
        hash:import.meta.env.VITE_HASH
      }
    },
  )
    return rtaAPI.data.data;
  }
  async getCreators(){
    const rtaAPI = await axios.get(URL_API+"/creators",{
      params:{
        apikey:import.meta.env.VITE_API_KEY,
        ts:import.meta.env.VITE_TS,
        hash:import.meta.env.VITE_HASH
      }
    },
  )
    return rtaAPI.data.data;
  }
  async searchCreator(value){
    const rtaAPI = await axios.get(URL_API+"/creators",{
      params:{
        apikey:import.meta.env.VITE_API_KEY,
        ts:import.meta.env.VITE_TS,
        hash:import.meta.env.VITE_HASH,
        nameStartsWith: value
      }
    },
    )
    return rtaAPI.data.data;
  }

  async getCreatorById(id){
    const rtaAPI = await axios.get(`${URL_API}/creators/${id}`,{
      params:{
        apikey:import.meta.env.VITE_API_KEY,
        ts:import.meta.env.VITE_TS,
        hash:import.meta.env.VITE_HASH
      }
    },
  )
    return rtaAPI.data.data;
  }


  async getEvents(){
    const rtaAPI = await axios.get(URL_API+"/events",{
      params:{
        apikey:import.meta.env.VITE_API_KEY,
        ts:import.meta.env.VITE_TS,
        hash:import.meta.env.VITE_HASH
      }
    },
  )
    return rtaAPI.data.data;
  }

  async searchEvent(value){
    const rtaAPI = await axios.get(URL_API+"/events",{
      params:{
        apikey:import.meta.env.VITE_API_KEY,
        ts:import.meta.env.VITE_TS,
        hash:import.meta.env.VITE_HASH,
        nameStartsWith: value
      }
    },
    )
    return rtaAPI.data.data;
  }
  async getEventById(id){
    const rtaAPI = await axios.get(`${URL_API}/events/${id}`,{
      params:{
        apikey:import.meta.env.VITE_API_KEY,
        ts:import.meta.env.VITE_TS,
        hash:import.meta.env.VITE_HASH
      }
    },
  )
    return rtaAPI.data.data;
  }
  async getSeries(){
    const rtaAPI = await axios.get(URL_API+"/series",{
      params:{
        apikey:import.meta.env.VITE_API_KEY,
        ts:import.meta.env.VITE_TS,
        hash:import.meta.env.VITE_HASH
      }
    },
  )
    return rtaAPI.data.data;
  }
  async searchSerie(value){
    const rtaAPI = await axios.get(URL_API+"/series",{
      params:{
        apikey:import.meta.env.VITE_API_KEY,
        ts:import.meta.env.VITE_TS,
        hash:import.meta.env.VITE_HASH,
        titleStartsWith: value
      }
    },
    )
    return rtaAPI.data.data;
  }
  async getSerieById(id){
    const rtaAPI = await axios.get(`${URL_API}/series/${id}`,{
      params:{
        apikey:import.meta.env.VITE_API_KEY,
        ts:import.meta.env.VITE_TS,
        hash:import.meta.env.VITE_HASH
      }
    },
  )
    return rtaAPI.data.data;
  }
  async getStories(){
    const rtaAPI = await axios.get(URL_API+"/stories",{
      params:{
        apikey:import.meta.env.VITE_API_KEY,
        ts:import.meta.env.VITE_TS,
        hash:import.meta.env.VITE_HASH
      }
    },
  )
    return rtaAPI.data.data;
  }
  async getStoryById(id){
    const rtaAPI = await axios.get(`${URL_API}/stories/${id}`,{
      params:{
        apikey:import.meta.env.VITE_API_KEY,
        ts:import.meta.env.VITE_TS,
        hash:import.meta.env.VITE_HASH
      }
    },
  )
    return rtaAPI.data.data;
  }
}

export const marvelService = new MarvelService();
