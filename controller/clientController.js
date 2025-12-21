const getClientPage = (req, res) => {
    try {
        return res.render('home')
    } catch (error) {
        console.log(error);
    }
}

export { getClientPage }