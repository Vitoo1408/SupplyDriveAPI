import fastify from 'fastify';
import dotenv from 'dotenv';
import userTypesController from './controllers/userTypesController.js';
import vehiclesController from './controllers/vehiclesController.js';
import jobLogsController from './controllers/jobLogsController.js';
import jobsController from './controllers/jobsController.js';
import jobTypesController from './controllers/jobTypesController.js';
import locationsController from './controllers/locationsController.js';
import metafieldsController from './controllers/metafieldsController.js';
import usersController from './controllers/usersController.js';
import usersLocationsController from './controllers/usersLocationsController.js';
import usersTypesController from './controllers/usersTypesController.js';
import authController from './controllers/authController.js';
import fastifyJwt from '@fastify/jwt';
// Import other controllers similarly

dotenv.config();

const app = fastify();

app.register(fastifyJwt, {
    secret: process.env.JWT_SECRET || 'bitcoin200k2025', // Replace with an environment variable in production
  });

// Add a decorator to decode the token and validate the user
app.decorate("authenticate", async (request, reply) => {
    try {
      await request.jwtVerify();
    } catch (err) {
      reply.send(err);
    }
  });


// Routes
// Auth Routes
app.post('/auth/login', authController.login);

// User Types Routes
app.post('/user-types', userTypesController.createUserType);
app.get('/user-types', userTypesController.getUserTypes);
app.get('/user-types/:user_type_id', userTypesController.getUserTypeById);
app.put('/user-types/:user_type_id', userTypesController.updateUserType);
app.delete('/user-types/:user_type_id', userTypesController.deleteUserType);

// Vehicles Routes
app.get('/vehicles', vehiclesController.getAllVehicles);
app.get('/vehicles/:id', vehiclesController.getVehicleById);
app.post('/vehicles', vehiclesController.createVehicle);
app.put('/vehicles/:id', vehiclesController.updateVehicle);
app.delete('/vehicles/:id', vehiclesController.deleteVehicle);

// Job Logs Routes
app.get('/jobLogs', jobLogsController.getAllLogs);
app.get('/jobLogs/:id', jobLogsController.getLogById);
app.post('/jobLogs', jobLogsController.createLog);
app.delete('/jobLogs/:id', jobLogsController.deleteLog);

// Jobs Routes
app.get('/jobs', jobsController.getAllJobs);
app.get('/jobs/:id', jobsController.getJobById);
app.post('/jobs', jobsController.createJob);
app.put('/jobs/:id', jobsController.updateJob);
app.delete('/jobs/:id', jobsController.deleteJob);

// Job Types Routes
app.get('/jobTypes', jobTypesController.getAllJobTypes);
app.get('/jobTypes/:id', jobTypesController.getJobTypeById);
app.post('/jobTypes', jobTypesController.createJobType);
app.put('/jobTypes/:id', jobTypesController.updateJobType);
app.delete('/jobTypes/:id', jobTypesController.deleteJobType);

// Locations Routes
app.get('/locations', locationsController.getAllLocations);
app.get('/locations/:id', locationsController.getLocationById);
app.post('/locations', locationsController.createLocation);
app.put('/locations/:id', locationsController.updateLocation);
app.delete('/locations/:id', locationsController.deleteLocation);

// Metafields Routes
app.get('/metafields', metafieldsController.getAllMetafields);
app.get('/metafields/:id', metafieldsController.getMetafieldById);
app.post('/metafields', metafieldsController.createMetafield);
app.put('/metafields/:id', metafieldsController.updateMetafield);
app.delete('/metafields/:id', metafieldsController.deleteMetafield);

// Users Routes
app.get('/users', usersController.getAllUsers);
app.get('/users/:id', usersController.getUserById);
app.post('/users', usersController.createUser);
app.put('/users/:id', usersController.updateUser);
app.delete('/users/:id', usersController.deleteUser);

// Users Locations Routes
app.get('/userslocations', usersLocationsController.getAllUsersLocations);
app.get('/userslocations/:id', usersLocationsController.getUserLocationById);
app.post('/userslocations', usersLocationsController.createUserLocation);
app.put('/userslocations/:id', usersLocationsController.updateUserLocation);
app.delete('/userslocations/:id', usersLocationsController.deleteUserLocation);

// Users Types Routes
app.get('/userstypes', usersTypesController.getAllUsersTypes);
app.get('/userstypes/:id', usersTypesController.getUserTypeById);
app.post('/userstypes', usersTypesController.createUserType);
app.put('/userstypes/:id', usersTypesController.updateUserType);
app.delete('/userstypes/:id', usersTypesController.deleteUserType);


// Define other routes similarly...

const start = async () => {
    try {
        await app.listen({ port: process.env.PORT ?? 3000 });
        console.log('Server running at http://localhost:3000');
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

start();

export default app;

