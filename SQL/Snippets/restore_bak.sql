# Run to get logical DB names and physical names
RESTORE FILELISTONLY FROM DISK='D:\Backups\SQL Server\BitBucket.bak'

# Run backup. Note won't work if DB already exists
RESTORE DATABASE newDatabase FROM DISK='D:\Backups\SQL Server\flatfile.bak'
WITH 
   MOVE 'logicalName' TO 'Path\From\PhysicalName\newDatabase.mdf',
   MOVE 'logicalName_log' TO 'Path\From\PhysicalName\newDatabase_log.ldf'