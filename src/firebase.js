// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/messaging";

class Firebase {
  constructor() {
    const firebaseConfig = {
      "type": "service_account",
      "project_id": "easyday-d3f45",
      "private_key_id": "AIzaSyDVWTkUcWLGvLEH8Zn-FU24iRhxck5pfxs",
      "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCVO/Bt9yTwfW0l\nhwRU4od+1q1/nPSsGNEgiVLHyxG18FfvFE8z1QsnKwSPihOravINavBT7amVYkR1\nFCzLyLJnKF3NviZx7XFgbgiA3YLl2IJsk3XpA59lNVlspyfBL25sXs3mvkWvkeyi\nhgxUOMlgWmJXgO0ykdi1ZT6/vNK3c3CN719o/FIGf5r5ibJhqMgLHZhrw0utfEx2\nqmCELeqsQYCO/RJPs0n+OuPZF6oIKV4OtTSbRLoueeS0b7Y09q4AZ1LQ89q9PR2s\nQwszBW/UcxwPqIzP+R2xGO2R/0UPDRBGJHN7ueCwXtXH+uQ5qtKWEcabRrK4tZth\n+Cdpm8CvAgMBAAECggEAAgINoPp/hD7jzj/2q8plMVc5JsDuvTa+RaD4vK3Q/gY5\ntgKrctKYilKMBqnAdwDYOJxU7IQuUSTChWLGnDKwooO1XhSDbEAE07Esqx3lP4DT\ndxuK2B5PhutEr0TBMQUZiBrEdtOI7i0D+/Hazkf5/we9pVjGQvUZxI2+s5IaXGk2\nItqPYnLkJrrf0Q7Rv/iLckMFfqMA78DgqKcmmivMpmKeTMQR03iBnDTORnUbp0/M\ndz8NzueLxSb9xl7Ifi0TlaRDUVhfqoMFOqH6j82L0zIJ5Aunk9a7R5xmQQXU2vSd\n8cTX3+L5ipDAeUWTgKthFjLdQUgXUhhHvC8qZEZdjQKBgQDP6q8VNd5ozQKgp/9A\nEySdVzq0bR0YJaT4XAz3uiCT9QqhmG/JxOze/YvG3QXPeG9u9POe3QYO9XqybOdT\nUbnqHpC8KmlQlachnthFvpVU74ltQp6ZljCHnifyXv0QjADtD3mh0U5/5iYTxc5G\npIBvZyW8uQHfdELAFXSvUeiAewKBgQC3vxA5Qz7U3jp8Dku/ikglb8VZqszWwI2F\nG6+sPW2gZj0Cp95x8nZeBb2Je2bt13IAy83DCu1uAfTpZ6SV5XFhNlALUkwe+ATD\nNH/b0sFmyXhkBeziSxBOLDG1vgogivErFbshk+qNY2rS76DyqtPZzGDBHssod1HD\nT4rNK0T8XQKBgAbASA8YQLCGd59f1RnvhTDWtEFHibpO/pxR4NnqYURsoHu+x2J1\n0nsrIG7EnnuuHXAs4/w0kQ3LSsCgaKJ79N11QJ3bgq/rLBIbZkpdddvcK0ow75Vt\nGwZMTF/CVdVDtoP8DKcEdNgSUQozUg9ZKBJ19vO5ziXDUKeMCs3mivYhAoGBAIwn\ng7N59IIgJFIeAW9PhepwUAMuQeKIqyndzWi+zlDryxusegNGYz0ieclVRFSk4kNz\nMTbVrfccLPif4q2nfo0dBX8tPfzdR5yx/djp8DV79YWt81tE0GIgWaZ8F3NtJ7mq\ncLuS/PTt4TyWJZkT7lYSC7ciyunJ4abtlD0dBRjNAoGAPVHTTL/G0F1fU4nveXL3\nKKOnECvWnYcbuHZH9uhD0Rx1de6iFLieSYe8mrooTmu0hqE7tZ1A/RNdyzeLKZwv\n2visyubq0Abp5YG7J8K7L+34jov4x2hTE0m2OIsd9htst6dDiSMvigmovenZDAsa\nzEX9YbYAKf307otNZ8b4rJU=\n-----END PRIVATE KEY-----\n",
      "client_email": "firebase-adminsdk-tkqni@easyday-d3f45.iam.gserviceaccount.com",
      "client_id": "108442410046026492446",
      "auth_uri": "https://accounts.google.com/o/oauth2/auth",
      "token_uri": "https://oauth2.googleapis.com/token",
      "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
      "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/-adminsdk-tkqni%easyday-d3f45.iam.gserviceaccount.com",
      "firebaseURL": "https://themesbrand-admin.firebaseio.com",
    };

    firebase.initializeApp(firebaseConfig);
  }

  getToken = async () => {
    const messaging = firebase?.messaging();

    return await messaging?.getToken();
  };

  onMessageListener = () => {
    return new Promise((resolve) => {
      const messaging = firebase?.messaging();
      messaging?.onMessage((payload) => {
        resolve(payload);
      });
    });
  };
}

let _firebaseInstance = null;

export const getFirebase = () => {
  if (!_firebaseInstance) {
    _firebaseInstance = new Firebase();

    return _firebaseInstance;
  }

  return _firebaseInstance;
};
