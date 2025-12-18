const getAdminPage = async (req, res) => {
    try {
        return res.render('index')
    } catch (error) {
        console.log(error);
    }
}

export { getAdminPage }