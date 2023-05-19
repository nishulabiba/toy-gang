import React from 'react';

const Blogs = () => {
    return (
        <div className=' bg-white p-20 text-stone-800'>
            <h1 className='text-4xl text-center font-serif'>Welcome to Blogs!</h1>
            <div tabIndex={0} className="m-5 collapse collapse-arrow  border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium bg-black text-white">
                What is an access token and refresh token? How do they work and where should we store them on the client-side?
                </div>
                <div className="collapse-content bg-slate-400">
                    <p><span className="font-bold">Access Token:</span> An access token is a credential that is used to access protected resources on behalf of a user. <br />
                    It is typically a JSON web token (JWT) containing information about the user and their authorization. The access token is usually short-lived and has an expiration time. It is passed with each request to the server to authenticate and authorize the user.
                    </p>
                    <p><span className="font-bold">Refresh Token:</span> A refresh token is a long-lived token that is used to obtain a new access token once the previous one expires.
                    <br />
                    It is usually issued along with the access token during the initial authentication process. The refresh token is securely stored on the client-side and sent to the server when needed to obtain a new access token. It is used to refresh the user's authentication session without requiring them to log in again.</p>
                    <p>
                    Here's a typical flow of how access tokens and refresh tokens work together: <br />

                    User logs in: When a user successfully authenticates, the server generates an access token and a refresh token. The access token is returned to the client, while the refresh token is securely stored on the client-side (e.g., in local storage or an HTTP-only cookie).

                    Accessing protected resources: The client includes the access token in the header (e.g., Authorization: Bearer access_token with each request to the server. The server verifies the access token to authenticate and authorize the user.

                    Access token expiration: The access token has an expiration time, after which it becomes invalid. If the access token expires, the server returns a 401 Unauthorized response.
                    </p>
                </div>
            </div>
            <div tabIndex={0} className="m-5 collapse collapse-arrow  border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium bg-black text-white">
                Compare SQL and NoSQL databases?
                </div>
                <div className="collapse-content bg-slate-400">
                    <p>
                    <span className='font-bold'>SQL Databases:</span> <br />

                        Data Model: SQL databases follow a rigid, predefined schema. Data is organized into tables with fixed columns and rows, and relationships between tables are established using foreign keys. <br />
                        Schema and Flexibility: SQL databases require a predefined schema that determines the structure and types of data in the tables. Changes to the schema may require altering the table structure, which can be complex and time-consuming. <br />
                        Query Language: SQL databases use the SQL language for defining, manipulating, and querying data. SQL provides a standardized syntax for interacting with the database. <br />
                        ACID Compliance: SQL databases typically guarantee ACID (Atomicity, Consistency, Isolation, Durability) properties. This ensures data integrity, transactional consistency, and reliable recovery in case of failures.
                    </p>
                    <p>
                    <span className='font-bold'>NoSQL Databases:</span> <br />
                    Data Model: NoSQL databases use various data models such as key-value pairs, document-based, columnar, or graph-based. They offer flexibility in storing and organizing data without enforcing a fixed schema. <br />
                    Schema and Flexibility: NoSQL databases are schema-less or have a flexible schema. They allow adding new attributes or fields dynamically without the need for altering the entire data structure. <br />
                    Query Language: NoSQL databases use different query languages depending on the specific database technology. Examples include MongoDB's query language, Cassandra Query Language (CQL), or graph query languages like Gremlin and Cypher. <br />
                    CAP Theorem: NoSQL databases often prioritize availability and partition tolerance over strict consistency (known as the CAP theorem). They aim for eventual consistency rather than immediate consistency across distributed systems.

                    </p>
                </div>
            </div>
            <div tabIndex={0} className="m-5 collapse collapse-arrow  border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium bg-black text-white">
                What is express js? What is Nest js?
                </div>
                <div className="collapse-content bg-slate-400">
                    <p>
                    Express.js is a popular web application framework for Node.js. It provides a minimal and flexible set of features for building web applications and APIs. Express.js allows you to handle routes, manage HTTP requests and responses, set up middleware, and implement various functionalities required for web development. It is known for its simplicity, ease of use, and extensive community support. <br />

                    NestJS, on the other hand, is a progressive Node.js framework built with TypeScript. It is designed to make the development of server-side applications more structured and scalable. NestJS takes inspiration from Angular and leverages decorators, dependency injection, and modules to create a modular and maintainable codebase. It provides a powerful architecture that encourages the use of solid design principles like separation of concerns, modularity, and testability. NestJS is often used to build enterprise-level applications and APIs.
                    </p>
                </div>
            </div>
            <div tabIndex={0} className="m-5 collapse collapse-arrow  border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium bg-black text-white">
                What is MongoDB aggregate and how does it work?
                </div>
                <div className="collapse-content bg-slate-400">
                    <p>
                    MongoDB's aggregate is a powerful feature that allows you to perform advanced data processing and analysis operations on the data stored in a MongoDB collection. It provides a framework for composing multiple stages of operations to transform and manipulate the documents. <br />

                    The aggregate pipeline in MongoDB consists of multiple stages, each performing a specific operation on the documents as they pass through the pipeline. The stages are executed in sequence, with the output of one stage serving as the input for the next stage. <br /> Here are some commonly used stages in the aggregate pipeline: <br />

                    $match: Filters the documents based on specified criteria, similar to the find operation. <br />
                    $group: Groups the documents by a specified key and applies aggregation functions like $sum, $avg, $max, etc., to calculate aggregate values within each group. <br />
                    $project: Reshapes the documents, including adding, removing, or transforming fields. <br />
                    $sort: Sorts the documents based on specified criteria. <br />
                    $limit and $skip: Limits the number of documents returned and skips a specified number of documents, respectively. <br />
                    $unwind: Deconstructs an array field into multiple documents, creating a separate document for each array element.
                    </p>
                </div>
            </div>
           
        </div>
    );
};

export default Blogs;