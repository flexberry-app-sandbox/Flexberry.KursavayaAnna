docker build --no-cache -f SQL\Dockerfile.PostgreSql -t kursavayaanna-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t kursavayaanna-java/app ../../..
