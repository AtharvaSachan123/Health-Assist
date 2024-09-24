// DataBase Interation Code Here 

import React, { createContext, useContext, useState,useCallback } from 'react';

import {db} from dbConfig;
import {Users,Records} from '..utils/schema';
import { eq } from 'drizzle-orm';

const StateContext = createContext();

export const StateProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    const [records, setRecords] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);
    
    const fetchUsers = useCallback(async () => {
        try{
            const result = await db.select().from(Users).execute();
            setUsers(result);}
        catch(err){
            console.error(err);
        }
    }, []);

    const fetchUserByEmail = useCallback(async (email) => {
        const result= await db.select().from(Users).where(eq(Users.createdBy,email));
        try{
        if(result.length>0){
            setCurrentUser(result[0]);
        }} catch(err){
            console.error(err);
        }
    },[]);
    
   
    
    const createUser = useCallback(async (userData) => {
        try{
           const newUser = await db.insert(Users).values(userData).returning().execute();
           setCurrentUser((prevUsers)=>[...prevUsers,newUser[0]]);
        } catch(err){
            console.error(err);
            return null;
        }
        
    }, []);
    

    const fetchUserRecords = useCallback(async (userEmail) => {
        try{
            const result = await db.select().from(Records).where(eq(Records.createdBy,userEmail)).execute();
            setRecords(result);}
        catch(err){
            console.error(err);
        }
    }, []);

    const createRecord = useCallback(async (recordData) => {
        try{
           const newRecord = await db.insert(Records).values(recordData).returning({id:Records.id}).execute();
           setRecords((prevRecords)=>[...prevRecords,newRecord[0]]);
        } catch(err){
            console.error(err);
            return null;
        }
        
    }, []);
   
    const updateRecord = useCallback(async (recordData) => {
        try{
            const {DocumentId,...dataToUpdate} = recordData;
           const updatedRecord = await db.update(Records).set(dataToUpdate).where(eq(Records.id,DocumentId)).returning();
           setRecords((prevRecords)=> prevRecords.map((record)=>record.id===DocumentId?updatedRecord[0]:record)); 
        } catch(err){
            console.error(err);
            return null;
        }
        
    }, []);

    return (
        <StateContext.Provider
            value={{
                users,
                records,
                currentUser,
                fetchUsers,
                fetchUserByEmail,
                createUser,
                fetchUserRecords,
                createRecord,
                updateRecord,
            }}> 
            {children}
        </StateContext.Provider>
    )
    

};

export const useStateContext = () => {
    return useContext(StateContext);
}