// StackParamList.ts

// Define the type for the user data coming from the API
export type User = {
    name: {
        first: string;
        last: string;
    };
    phone: string;
    email: string;
    location: {
        city: string;
        state: string;
        country: string;
    };
    picture: {
        large: string;
    };
};

// Define the StackParamList
// StackParamList.ts
// StackParamList.ts
export type StackParamList = {
    Categories: undefined;
    ContactDetail: {
        contact: {
            name: { first: string; last: string };
            phone: string;
            email: string;
            location: { city: string; state: string; country: string };
            picture: string;  // picture URL, not the entire picture object
        };
    };
};
