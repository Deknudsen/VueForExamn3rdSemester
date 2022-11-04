import { ref } from 'vue'
import { db } from '../firebase.js'
import { collection, doc, deleteDoc, onSnapshot, addDoc, updateDoc } from 'firebase/firestore'
import router from '@/router/index.js'

const useEvents = () => {

    const eventsData = ref([])

    const eventDataRef = collection(db, "events")

    const getEventsData = () => {
        onSnapshot(eventDataRef, (snapshot) => {
            eventsData.value = snapshot.docs.map(doc => {
                return {
                    ...doc.data(),
                    id: doc.id,
                }
            })
        })
    }

    // Create an event
    const addEvent = async (addEventInfo) => {
        await addDoc(eventDataRef, {
            title: addEventInfo.title,
            date: addEventInfo.date,
            description: addEventInfo.description
        }).then (() => {
            router.push({ path: '/adminEvents' })
        })
    }

    // Edit and update an already made event
    const editEvent = async (editEventInfo) => {
        await updateDoc(doc(eventDataRef, editEventInfo.id), {
            title: editEventInfo.title,
            date: editEventInfo.date,
            description: editEventInfo.description
        }).then (() => {            
            router.push({ path: '/adminEvents' })
        })
    }

    // Delete an event
    const deleteEvent = async (id) => {
        await deleteDoc(doc(db, "events", id))
    }

    //Returning all functions made
    return {
        eventsData,
        getEventsData,
        addEvent,
        editEvent,
        deleteEvent
    }
}

export default useEvents