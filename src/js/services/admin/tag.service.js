import axiosHelper from "../../helpers/axios";

const getAll = async (
    params,
    onSucces = () => { },
    onError = () => { }
) => {
    try {
        const GET_ALL_TAG_PATH = `/admin/category`
        const res = await axiosHelper.sendGet(GET_ALL_TAG_PATH);
        if (res?.code === 200) {
            onSucces(res?.data);
        }
    } catch (error) {
        console.log(error);
    }
};

const addTag = async (
    params,
    onSucces = () => { },
    onError = () => { }
) => {
    try {
        const GET_ALL_PRODUCT_PATH = `/admin/product/add`
        const data = {
            perPage: params?.perPage
        }
        const res = await axiosHelper.sendGet(GET_ALL_PRODUCT_PATH);
        if (res?.code === 200) {
            onSucces(res?.data);
        }
    } catch (error) {
        console.log(error);
    }
};

export default {
    getAll,
    addTag,
}