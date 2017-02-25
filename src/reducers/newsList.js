let initState = {
    id: 1,
    title: "title",
    subtitle: "subtitle",
    text: "textsjdfkljasdlkjsdlfkjs dtextsjdfkljasdlkjsdlfkj sdtextsjdfkljasdlkjsdlfkjsdtext sjdfkljasdlkjsdlfkjsdtextsjdfkljasdlkjsdlfkjsdt extsjdfkljasdlkjsd lfkjsdtextsjdfklja sdlkjsdlfkjsdtextsj dfkljasdlkjsdlfkjsdtex tsjdfkljasdlkjsdlfkjsdtext sjdfkljasdlkjsdlfkjsd"
};

const news = (state = initState) => {
    return state;
};

const newsList = (state = [], action) => {
    switch (state) {
        default:
            return [
                ...state,
                news()
            ];
    }
};

export default newsList;