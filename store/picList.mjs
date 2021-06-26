class Picture {
    list = [];

    setList(list) {
        let onlyOne = Array.from(new Set(list, this.list));
        this.list = onlyOne
    }

    getPic() {
        if (this.list.length > 0) {
            return this.list.splice(Math.floor(Math.random() * this.list.length), 1)[0]
        }
        return ''
    }
}

export default new Picture();