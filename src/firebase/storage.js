import { getStorage, ref } from 'firebase/storage'

const storage = getStorage()

// Points to the root reference
export const storageRef = ref(storage)

// Points to 'images'
export const imagesRef = ref(storageRef, 'images')

// Points to 'images/space.jpg'
// Note that you can use variables to create child values
export const fileName = 'space.jpg'
export const spaceRef = ref(imagesRef, fileName)

// File path is 'images/space.jpg'
export const path = spaceRef.fullPath

// File name is 'space.jpg'
export const name = spaceRef.name

// Points to 'images'
export const imagesRefAgain = spaceRef.parent
