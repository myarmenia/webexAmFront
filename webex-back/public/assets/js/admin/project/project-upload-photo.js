document.addEventListener('DOMContentLoaded', function (e) {
  (function () {
    const fileInput = document.querySelector('.account-file-input');
    const uploadedImagesContainer = document.getElementById('uploadedImagesContainer');
    const uploadedImages = []; 

    fileInput.onchange = () => {
      if (fileInput.files.length > 0) {
        console.log(fileInput.files, "fileInput.files")
        uploadedImages.length = 0;

        // uploadedImagesContainer.innerHTML = '';

        for (let i = 0; i < Math.min(fileInput.files.length, 4); i++) {
          const imageData = {
            url: window.URL.createObjectURL(fileInput.files[i]),
            fileName: fileInput.files[i].name
          };
          uploadedImages.push(imageData);

          const imageContainer = document.createElement('div');
          imageContainer.className = 'uploaded-image-container';

          const image = document.createElement('img');
          image.src = imageData.url;
          image.alt = 'uploaded-image';
          image.className = 'd-block rounded uploaded-image uploaded-photo-project';
          imageContainer.appendChild(image);

          const removeButton = document.createElement('button');
          removeButton.type = 'button';
          removeButton.className = 'btn btn-outline-danger btn-sm mt-2';
          removeButton.textContent = 'Remove';
          removeButton.onclick = () => {
console.log(imageContainer.files, imageContainer, 5555888)
            const index = uploadedImages.indexOf(imageData);
            let fileInputtest = document.querySelector('.account-file-input');

            if (index !== -1) {
              uploadedImages.splice(index, 1);
            }
            console.log(uploadedImages, uploadedImagesContainer.files , "before")
            console.log( document.querySelector('.account-file-input').files, "QQQQQQQQQQQQQ")

            // document.querySelector('.account-file-input').files.splice(index, 1);

            uploadedImagesContainer.removeChild(imageContainer);
console.log(imageContainer.files, imageContainer, 7778888)
           

          };
          imageContainer.appendChild(removeButton);

          uploadedImagesContainer.appendChild(imageContainer);
        }
      }
    };
  })();
});
