

module.exports = {
    getYear: function() {
        return new Date().getFullYear();
    },
    removeCommas: function(str) {
        if (!str) return '';
        return str.replace(/,/g, '');
    }
};
