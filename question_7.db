SELECT DISTINCT user.name, (SELECT count(vehicle_id) FROM user_vehicle WHERE user_id = user.user_id) vehicle 
from users user 
WHERE vehicle > 2;