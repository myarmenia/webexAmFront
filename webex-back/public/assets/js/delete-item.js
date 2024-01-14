$(function () {
  $('.click_delete_item').on('click', function () {
    let id = $(this).parents('.action').attr('data-id')
    let tb_name = $(this).parents('.action').attr('data-tb-name')
    let url = `/delete-item/${tb_name}/${id}`

    $('.delete_item').attr('data-url', url)
    $('.message_cont').html('')

  })
})


$(function () {
  $('.delete_item').on('click', function () {
    let url = $(this).attr('data-url')
    let id = url.split("/").pop();
    let row = $(`.action[data-id="${id}"]`).parents('tr')


    $.ajax({
      type: "GET",
      url: url,
      cache: false,
      success: function (data) {
        let message = ''
        let type = ''
        if (data.result) {
          message = 'Действия подтвержден'
          type = 'success'
          row.remove()
        }
        else {
          message = 'Ошибка'
          type = 'danger'
        }

        $('.message_cont').html(`<span class="text-${type}">${message}</span>`)
      }
    });

  })
})
