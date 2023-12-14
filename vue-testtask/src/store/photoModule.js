import axios from 'axios'
export default {
    state:{
        photos:{},
        isLoading:true,
        filteredPhotos:[]
    },
    mutations:{
        setPhotos(state, payload) {
            console.log(state, 'state', payload, 'payload')

            state.photos[payload.id] = [...(state.photos[payload.id]||[]),...payload.data]
        },
        setIsLoading(state, bool) {
            state.isLoading = bool
        },
        clearPhotos(state) {
            state.photos = {}
        },
        setFilteredPhotos (state, id)  {
            state.filteredPhotos = state.photos[id] 
        }
    },
    getters:{
        getAllPhotos(state) {
            return state.photos
        }, 
        getStatus(state) {
            return state.isLoading
        },
        getFilteredPhotos(state) {
            return state.filteredPhotos
        }
    },
    actions:{
       async fetchPhotos(context, id) {
         await   axios.get('https://jsonplaceholder.typicode.com/photos?albumId=' + id + '&_limit=5')
            .then((response) => {
                context.commit("setPhotos", {data:response.data, id})
                context.commit("setIsLoading", false)
            })
        },

        getFilteredPhotos(context, id) {
            context.commit("setFilteredPhotos", id)
        }
    },
}