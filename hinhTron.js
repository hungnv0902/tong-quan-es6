const hinhTron = () => {};

hinhTron.chuVi = (r) => {
    return 2*Math.PI*r;
}

hinhTron.dienTich = (r) => {
    return Math.PI*Math.pow(r, 2);
}

module.exports = hinhTron;