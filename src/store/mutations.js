export default {
    changeCityName (state, city) {
        state.city = city;
        localStorage.city = city;
    }
}