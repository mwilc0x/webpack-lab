import $ from 'jquery';

class WebApi {

  constructor() {

  }

  initData() {

    console.log('Initiating data...')

    $.ajax({
      url: 'http://localhost:3001/api/books',

      dataType: 'json',

      success: (data) => {
        console.log(data)
      },

      error: (xhr, status, err) => {
        console.log('Error fetching books!')
        console.error(err);
      }
    });
  }

}

export default WebApi;
