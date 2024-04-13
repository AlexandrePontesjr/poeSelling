INSERT INTO poe_selling_tenant (id, image, name)
SELECT * FROM (SELECT 1, 'https://upload.wikimedia.org/wikipedia/en/0/08/Path_of_Exile_Logo.png', 'Path of Exile') AS tmp
WHERE NOT EXISTS (
    SELECT id FROM poe_selling_tenant WHERE id = 1
) LIMIT 1;

INSERT INTO poe_selling_tenant (id, image, name)
SELECT * FROM (SELECT 2, 'https://cdn2.steamgriddb.com/icon_thumb/4d1180e592869543e75486faa4eb9d23.png', 'Diablo IV') AS tmp
WHERE NOT EXISTS (
    SELECT id FROM poe_selling_tenant WHERE id = 2
) LIMIT 1;

INSERT INTO poe_selling_tenant (id, image, name)
SELECT * FROM (SELECT 3, 'https://upload.wikimedia.org/wikipedia/en/6/63/Last_Epoch_logo.png', 'Last Epoch') AS tmp
WHERE NOT EXISTS (
    SELECT id FROM poe_selling_tenant WHERE id = 3
) LIMIT 1;

INSERT INTO poe_selling_user (username, password)
SELECT * FROM (SELECT 'yan', '123') AS tmp
WHERE NOT EXISTS (
    SELECT username FROM poe_selling_user WHERE username = 'yan'
) LIMIT 1;

INSERT INTO poe_selling_user (username, password)
SELECT * FROM (SELECT 'SkinD', '123') AS tmp
WHERE NOT EXISTS (
    SELECT username FROM poe_selling_user WHERE username = 'SkinD'
) LIMIT 1;
