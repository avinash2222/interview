import _ from 'lodash'
import moment from 'moment'
console.log('started in testfile...')

/*
  list of unique car details
*/
let vehicleModel = [
  {_id: 1, modelNumber: 'A123', modelType: 'CAR', modelName: 'BREZZA', isOperating: true, barcode : '1223433434343435', parkingStalNum: 'A121121'},
  {_id: 3, modelNumber: 'B123', modelType: 'SUV', modelName: 'INOVA', isOperating: true, barcode : '1223433434343436', parkingStalNum: 'B121121'},
  {_id: 2, modelNumber: 'C123', modelType: 'SUV', modelName: 'SCORPIO', isOperating: true, barcode : '1223433434343437', parkingStalNum: 'C121121'},
]

/* 
  vehicle slot availability 
  aval enum: 1(available), 0(free), 2(booked)
*/
let vehicleSlotAvailability = [
  {_id: 1, availableSlots : [
    {
      date: 1625855400000,
      startTime: 1625106600000,
      endTime: 1625157000000,
      bookedTimeSlots: [
      
      ],
    },
    {
      date: 1625941800000,
      startTime: 1625106600000,
      endTime: 1625157000000,
      bookedTimeSlots: [
      
      ]
    },
  ]},
]

function checkVanAvailability () {

}

function bookVanOrder({vanId, date, startTime, endTime}) {
  vehicleSlotAvailability.map(item => {
    if (item.vanId === vanId) {
      item.availableSlots.map(item => {
        if (item.date == date) 
          if(_.isEmpty(item.bookedTimeSlots)) item.bookedTimeSlots.push({startTime: 1625106600000, endTime: 1625157000000})
      })
    }
  })

}

bookVanOrder({_id: 1, date: 1625855400000, startTime: 1625106600000, endTime: 1625157000000})



console.log(vehicleSlotAvailability)




