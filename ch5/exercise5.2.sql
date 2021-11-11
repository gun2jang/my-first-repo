# 1
SELECt `users`.`id`, `users`.`name`, `tickets`.`seat_number` FROM 'tickets'
INNER JOIN `users` ON `users`.`id` = `tickets`.`user` and `tickets`.`train` = 11
ORDER BY `tickets`.`seat_number`;

# 2
SELECT `users`.`id`, `users`.`name`, Count(*) AS `train_count`, Sum(`trains`.`distance`) AS `total_distance` FROM `tickets`
INNER JOIN `trains` ON `trains`.`id` = `tickets`.`train`
INNER JOIN `trains` ON `users` oN `users`.`id` = `tickets`.`user`
GROUP BY `users`.`id`
ORDER BY `total_distance` DESC
LIMIT 6;

# 4
SELECT `types`.`name` AS `type`, `src`.`name` AS `src_stn`, `dst`.`name` AS `dst_stn`, `trains`.`departure`, `trains`.`arrival`,
Round(`types`.`fare_rate` * `trains`.`distance` / 1000, -2) as `fare`
FROM `trains`
INNER JOIN `types` ON `types`.`id` = `trains`.`type`
INNER JOIN `stations` AS `src` ON `src`.`id` = `trains`.`source`
INNER JOIN `stations` AS `dst` ON `dst`.`id` = `trains`.`destination`
ORDER BY `departure`;

SELECT `trains`.`id`, `types`.`name` AS `type`, `src`.`name` AS `src_stn`, `dst`.`name` AS `dst_stn`,
Count(*) AS `occupied`, `types`.`max_seats` AS `maximum`
FROM `tickets`
INNER JOIN `trains` ON `trains`.`id` = `tickets`.`train`
INNER JOIN `types` ON `types`.`id` = `trains`.`type`
INNER JOIN `stations` AS `src` ON `src`.`id` = `trains`.`source`
INNER JOIN `stations` AS `dst` ON `dst`.`id` = `trains`.`destination`
GROUP BY `tickets`.`train`
ORDER BY `trains`.`id`;