const patientDataCtrl = {};
const PatientData = require('../models/PatientData');
const User = require('../models/User');

patientDataCtrl.createPatientData = async(req, res) => {
      console.log("Adding file");
      const { ipfsAddr, fileName, fileSize, remuneration, dataTypes, dataFormat, patientNames, patientLastNames, user_id } = req.body;
      const newPatientData = new PatientData({ipfsAddr, fileName, fileSize, remuneration, dataTypes, dataFormat, patientNames, patientLastNames});
      console.log(newPatientData, 'new patient data');
      await newPatientData.save({validateBeforeSave: false});

      let oldUser = await User.findOne({_id: user_id});
      //let newFiles = oldUser.files.append(newPatientData._id);
      console.log(newPatientData._id, 'new patient id');
      console.log(oldUser.files.concat(newPatientData._id), 'array on patients addin new');
      console.log(user_id, 'user to add patient');
      await User.findOneAndUpdate({_id: user_id}, {
        files: oldUser.files.concat(newPatientData._id)
      }).then(function (response, error) {
        console.log(response, 'new user');
        console.log(error, 'error');
      })

      res.json({message: 'Patient Data created'});
  };

  patientDataCtrl.deletePatientData = async(req, res) => {
    try {
      await PatientData.findByIdAndDelete(req.params.id);
      res.json({message: 'PatientData Deleted'})
    } catch (error) {
      res.json(error);
    }
  }

module.exports = patientDataCtrl;
