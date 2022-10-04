const { fileUpload } = require("../../src/helpers/fileUpload");
var cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name:'dj1ethf6d',
    api_key:'485868687145988',
    api_secret:'oRsTVHP5BIlp03Lx2NnmoA8Gk6E',
    secure: true
})

describe('Pruebas en fileUpload', () => { 

    test('debe de subir el archivo correctamente a cloudinary', async() => { 
        
        const imageUrl = 'https://t3.ftcdn.net/jpg/03/15/34/90/360_F_315349043_6ohfFyx37AFusCKZtGQtJR0jqUxhb25Y.jpg';
        const resp = await fetch(imageUrl);
        const blob = await resp.blob();
        const file = new File([blob], 'foto');
        
        const url = await fileUpload(file)
        expect(typeof url).toBe('string')


        //esta lógica se usa para poder eliminar mediante el delete resources de cloudinary
        // console.log(url);
        const segments = url.split('/');
        // console.log(segments)
        const imageId = segments[segments.length - 1].replace('.jpg', '');
        // console.log({imageId})
        const cloudResp = await cloudinary.api.delete_resources(['journal/' + imageId], {
            resource_type: 'image'
        });
        // console.log(cloudResp)

     })

     test('should debe de retornar null', async() => { 

        const file = new File([], 'foto');

        const url = await fileUpload(file)
        expect(url).toBe(null)
      })


 })