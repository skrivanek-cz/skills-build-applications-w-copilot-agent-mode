import mongoose from 'mongoose';
import Activity from '../models/Activity.js';
import Leaderboard from '../models/Leaderboard.js';
import Team from '../models/Team.js';
import User from '../models/User.js';
import Workout from '../models/Workout.js';

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await mongoose.connect(connectionString);

    console.log('Connected to octofit_db');

    await Promise.all([
      User.deleteMany({}),
      Team.deleteMany({}),
      Activity.deleteMany({}),
      Leaderboard.deleteMany({}),
      Workout.deleteMany({}),
    ]);

    const [alex, priya, sam] = await User.insertMany([
      { name: 'Alex Morgan', email: 'alex@example.com', avatar: 'AM', points: 1280 },
      { name: 'Priya Shah', email: 'priya@example.com', avatar: 'PS', points: 1140 },
      { name: 'Sam Rivera', email: 'sam@example.com', avatar: 'SR', points: 980 },
    ]);

    const [trailblazers, pulse] = await Team.insertMany([
      {
        name: 'Trailblazers',
        motto: 'One more mile together',
        color: '#ef8354',
        members: [alex._id, priya._id],
      },
      {
        name: 'Pulse Crew',
        motto: 'Find your rhythm',
        color: '#2d6a4f',
        members: [sam._id],
      },
    ]);

    await Activity.insertMany([
      {
        user: alex._id,
        team: trailblazers._id,
        type: 'run',
        durationMinutes: 42,
        distanceKm: 7.4,
        calories: 520,
        completedAt: new Date('2026-09-29T07:30:00Z'),
      },
      {
        user: priya._id,
        team: trailblazers._id,
        type: 'strength',
        durationMinutes: 35,
        calories: 310,
        completedAt: new Date('2026-09-30T18:00:00Z'),
      },
      {
        user: sam._id,
        team: pulse._id,
        type: 'ride',
        durationMinutes: 55,
        distanceKm: 18.2,
        calories: 610,
        completedAt: new Date('2026-10-01T06:45:00Z'),
      },
    ]);

    await Leaderboard.insertMany([
      { user: alex._id, team: trailblazers._id, period: 'weekly', points: 1280, rank: 1 },
      { user: priya._id, team: trailblazers._id, period: 'weekly', points: 1140, rank: 2 },
      { user: sam._id, team: pulse._id, period: 'weekly', points: 980, rank: 3 },
    ]);

    await Workout.insertMany([
      {
        title: 'Tempo Run Builder',
        description: 'A steady interval session to build sustainable speed.',
        category: 'cardio',
        difficulty: 'intermediate',
        durationMinutes: 30,
        exercises: ['Warm-up jog', '3 x 5 minute tempo', 'Cool-down walk'],
      },
      {
        title: 'Strong Foundations',
        description: 'A full-body strength session built around controlled movement.',
        category: 'strength',
        difficulty: 'beginner',
        durationMinutes: 30,
        exercises: ['Bodyweight squats', 'Incline push-ups', 'Glute bridges', 'Plank'],
      },
      {
        title: 'Desk Reset Flow',
        description: 'Gentle mobility work for hips, shoulders, and spine.',
        category: 'mobility',
        difficulty: 'beginner',
        durationMinutes: 15,
        exercises: ['Cat-cow', 'Worlds greatest stretch', 'Thoracic rotations'],
      },
    ]);

    console.log('Database seeding complete');
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
