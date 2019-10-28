  DROP TABLE IF EXISTS users;
  CREATE TABLE IF NOT EXISTS users (
      user_id INTEGER PRIMARY KEY,
      name TEXT NOT NULL
  );

  DROP TABLE IF EXISTS vehicles;
  CREATE TABLE IF NOT EXISTS vehicles (
      vehicle_id INTEGER PRIMARY KEY,
      name TEXT NOT NULL
  );


  DROP TABLE IF EXISTS user_vehicle;
  CREATE TABLE IF NOT EXISTS user_vehicle (
    user_id INTEGER,
    vehicle_id INTEGER,

    PRIMARY KEY (user_id, vehicle_id),
    FOREIGN KEY (user_id) 
    	REFERENCES users (user_id) 
				ON DELETE CASCADE 
				ON UPDATE NO ACTION,
    FOREIGN KEY (vehicle_id) 
      REFERENCES vehicles (vehicle_id) 
        ON DELETE CASCADE 
        ON UPDATE NO ACTION
  );

  INSERT INTO users (user_id, name) VALUES (1, 'Rick'), (2, 'John'), (3, 'Zing'), (4, 'Nan');
  INSERT INTO vehicles (vehicle_id, name) VALUES (1, 'Corvette Z06'), 
  (2, 'Lotus Exige S'), 
  (3, 'BMW M3'), 
  (4,'BMW 320d'), 
  (5, 'Mercedes SLK AMG'),
  (6, 'Toyota Alphard'),
  (7, 'Mercedes Sprinter'),
  (8, 'Toyota Camry'), 
  (9, 'BMW M5'), 
  (10, 'Porsche 911'), 
  (11, 'Jaguar'), 
  (12, 'TukTuk'), 
  (13, 'Mini Cooper'),
  (14, 'Honda Jazz');

  INSERT INTO user_vehicle (user_id, vehicle_id) VALUES (1,1), (1,2), (1,3), (2,4), (2,5), (3,6), (3,7),
  (4,8), (4,9), (4,10), (4, 11), (4, 12), (4, 13), (4, 14);

  SELECT user.name, vehicle.name from users user LEFT JOIN user_vehicle uv ON uv.user_id = user.user_id 
  LEFT JOIN vehicles vehicle on vehicle.vehicle_id = uv.vehicle_id;