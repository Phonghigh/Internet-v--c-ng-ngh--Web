export const admin_path = "/quan-tri"

export const ROUTERS ={
    USER: {
        HOME: "/",
        PROFILE: 'thong-tin-ca-nhan',
        PRODUCTS: '/san-pham',
        PRODUCT: '/san-pham/chi-tiet/:id',
        SHOPPINGCART: '/gio-hang',
        PAYMENT: '/thanh-toan',
        CONTACT: '/lien-he',
        ARTICLE: '/bai-viet',
        LOGIN: '/dang-nhap',

    },
    ADMIN: {
        LOGIN: `${admin_path}/dang-nhap`,
    }
}