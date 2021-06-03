export const addNote = (note) => {
    console.log(note)
    return (dispatch, getState, { getFirestore }) => {
        // make async call to database
        const firestore = getFirestore();
        firestore
            .collection("notes")
            .add({
                ...note,
                favorite: false,
                createdAt: new Date(),
            })
            .then(() => {
                console.log("Added successfully");
            })
            .catch((err) => {
                console.log(err)
            });
    };
};

export const deleteNote = (note) => {
    console.log(note)
    return (dispatch, getState, { getFirestore }) => {
        // make async call to database
        const firestore = getFirestore();
        firestore
            .collection("notes")
            .doc(note.id)
            .delete()
            .then(() => {
                console.log("deleted Successfully");
            })
            .catch((err) => {
                console.log(err)
            });
    };
};

export const toggleFavNote = (note) => {
    console.log(note)
    return (dispatch, getState, { getFirestore }) => {
        // make async call to database
        const fav = !note.favourite;
        const firestore = getFirestore();
        firestore
            .collection("notes")
            .doc(note.id)
            .update({favourite:fav})
            .then(() => {
                console.log("updated Successfully");
            })
            .catch((err) => {
                console.log(err)
            });
    };
};

export const updateNote = (note) => {
    // console.log(note)
    return (dispatch, getState, { getFirestore }) => {
        // make async call to database
        const firestore = getFirestore();
        firestore
            .collection("notes")
            .doc(note.id)
            .update({
                title:note.title,
                content:note.content
            })
            .then(() => {
                console.log("updated Successfully");
            })
            .catch((err) => {
                console.log(err)
            });
    };
};