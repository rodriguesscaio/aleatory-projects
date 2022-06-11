export default {
  post: (request, response) => {
    const { accountName, price } = request.body;

    console.log(accountName, price);
  },
};
