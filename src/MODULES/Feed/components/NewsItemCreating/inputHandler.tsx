type inputHandler_INTF = () => void

const inputHandler: inputHandler_INTF = (value: string) => {
    const username: string = localStorage.getItem('displayName') || 'errorUser'
    const today = new Date()
    const postData = {
        text: value,
        date: `${today.getFullYear()}/${
            today.getMonth() + 1
        }/${today.getDate()}/${today.getHours()}/${today.getMinutes()}`,
        image: '',
    } as postDataType
    const postNewsItemPayload = {
        username: username,
        postData: postData,
    } as newsPostNewsItemPayloadObjectType
    dispatch(newsPostNewsItem(postNewsItemPayload))
}

export default inputHandler

export { inputHandler_INTF }
