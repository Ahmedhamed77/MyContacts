import ImageCropPicker, {Image} from 'react-native-image-crop-picker';

export class ImagePicker {
  static async pickSquarePhoto() {
    try {
      const image = await ImageCropPicker.openPicker({
        compressImageMaxWidth: 1920,
        compressImageMaxHeight: 1920,
        cropping: true,
        forceJpg: true,
        cropperCircleOverlay: true,
        mediaType: 'photo',
        cropperToolbarTitle: 'Edit Photo',
      });

      return image;
    } catch (error: any) {
      if (error?.code === 'E_PICKER_CANCELLED') return;
      console.log('pickSquarePhoto', error);
    }
  }
  static async pickPhoto() {
    try {
      const image = await ImageCropPicker.openPicker({
        compressImageMaxWidth: 1920,
        compressImageMaxHeight: 1920,
        width: 1920,
        height: 1920,
        cropping: true,
        forceJpg: true,
        mediaType: 'photo',
        freeStyleCropEnabled: true,
        cropperToolbarTitle: 'Edit Photo',
      });
      return image;
    } catch (error: any) {
      console.log('pickSquarePhoto error:', error?.code);
      if (error?.code === 'E_PICKER_CANCELLED') {
        throw new Error('No photo selected');
      }

      if (error?.code === 'E_PERMISSION_MISSING') {
        throw new Error('Grant the required permission to do this');
      }

      throw new Error(error);
    }
  }

  static convertForPayload(image: Image) {
    return {
      name: getFileNameFromPath(image.path || 'image.jpg'),
      sourceFileName: image.filename,
      uri: image.path,
      type: image.mime,
      id: image.path,
      outer: false,
    };
  }
  static checkSize(image: Image) {
    return image.size < 10485760;
  }
}

export const getFileNameFromPath = (path: string) =>
  path.replace(/^.*[\\/]/, '');
