import React, { useState } from 'react';
import { useUserContext } from '../../../UserContext';
import styles from "./carinputs.module.css";
import axios from 'axios';
import { FaImage } from 'react-icons/fa';

function InputSettings() {
  const { currentUser } = useUserContext();

  const postedBy = currentUser ? currentUser._id : null;

  const [formData, setFormData] = useState({
    make: '',
    model: '',
    year: '',
    transmission: '',
    location: '',
    description: '',
    price: '',
    postedBy: postedBy,
  });

  const carData = [
    {  make : "BMW", models : ["M5 Competition","X5 M Competition" ] },
    {  make : "Mercedes-Benz", models : ["W124 E500","E450" ] },
    {  make : "Audi", models : ["A4","Q7" ] },
    {  make : "Porshe", models : ["718 Spyder" ] },
  ]

  const [photos, setPhotos] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleMakeChange = (e) => {
    const selectMake = e.target.value;
    setFormData({
      ...formData,
      make: selectMake,
    })
  }

  const handlePhotoChange = (e) => {
    const files = e.target.files;
    const updatedPhotos = [];

    for (let i = 0; i < files.length; i++) {
      updatedPhotos.push(files[i]);
    }

    setPhotos(updatedPhotos);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('make', formData.make);
      formDataToSend.append('model', formData.model);
      formDataToSend.append('year', formData.year);
      formDataToSend.append('transmission', formData.transmission);
      formDataToSend.append('location', formData.location);
      formDataToSend.append('description', formData.description);
      formDataToSend.append('price', formData.price);
      formDataToSend.append('postedBy', formData.postedBy);
  
      for (let i = 0; i < photos.length; i++) {
        formDataToSend.append('image', photos[i]);
      }
  
      const response = await axios.post('http://localhost:3500/cars', formDataToSend);
  
      console.log('Post added', response.data);
  
      setFormData({
        make: '',
        model: '',
        year: '',
        transmission: '',
        location: '',
        description: '',
        price: '',
        postedBy: currentUser._id,
      });
      setPhotos([]);
    } catch (error) {
      console.log('Error', error);
    }
  };

  return (
    <div >
      <form onSubmit={handleSubmit}>
        <div className={styles.inputs_one}>
            <div className={styles.formGroup}>
                <label>Make:</label>
                <select
                  name="make"
                  value={formData.make}
                  onChange={handleMakeChange }
                  required
                >
                  {carData.map((car) => (
                    <option key={car.make} value={car.make}>
                      {car.make}
                    </option>
                  ))}
                </select>
            </div>
            <div className={styles.formGroup}>
                <label>Model:</label>
                <select
                  name="model"
                  value={formData.model}
                  onChange={handleChange}
                  required
                >
                  <option value="">Choose model</option>
                  {carData
                    .find((car) => car.make === formData.make)
                    ?.models.map((model) => (
                      <option key={model} value={model}>
                        {model}
                      </option>
                    ))}
                </select>
            </div>
            <div className={styles.formGroup}>
              <label>Year:</label>
              <input
              placeholder='2023'
                type="number"
                name="year"
                value={formData.year}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label>Transmission:</label>
              <select 
              name="transmission"
              value={formData.transmission}
              onChange={handleChange}
              required
               >
                <option value="">Transmissions</option>
                <option value="automatic">Automatic</option>
                <option value="manual">Manual</option>
              </select>
            </div>
        </div>
        <div className={styles.inputs_two}>
            <div className={styles.formGroup}> 
              <label>Location:</label>
              <select
                name="location"
                value={formData.location}
                onChange={handleChange}
                className={styles.city}
                required
              >
                <option value="">Location</option>
                <option value="Oslo">Oslo</option>
                <option value="Stavanger">Stavanger</option>
                <option value="Sandnes">Sandnes</option>
                <option value="Bergen">Bergen</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <label>Description:</label>
              <textarea 
                type="text"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                >
              </textarea>
            </div>
            <div>
              <label>Price</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className={styles.price}
                required
              />
            </div>
            <div className={styles.formimage}>
              <label >Photo</label>
              <label className={styles.fileInput_custom} htmlFor="fileInput">
                 <FaImage className={styles.imageIcon} />
              </label>
              <input
                className={styles.fileInput}
                type="file"
                name="imageUrl"
                id="fileInput"
                accept="image/*"
                multiple
                onChange={handlePhotoChange}
                required
              />
                <div className={styles.selectedPhotos}>
                  {photos.map((photo, index) => (
                    <img
                      className={styles.selectedPhotosImage}
                      key={index}
                      src={URL.createObjectURL(photo)}
                      alt={`Selected ${index + 1}`}
                    />
                  ))}
                </div>
            </div>
            <button className={styles.btn_submit} type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default InputSettings;