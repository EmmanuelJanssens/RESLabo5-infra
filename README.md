# RESLabo5-infra

# STEP1  Static Apache server

# Build
## unix 
run `./build.sh`


# Run
Be aware running the containers must follow a specific order for this step, we assume that there are no other containers running
* run_static.sh
* run_dynamic.sh
* run_reverse_proxy.sh

If there are other containers running you need to get the ip adress from the static container and the dynamic container.
you must first start the static and the dynamic containers
* `./run_static.sh` starts the static  apache container
* `./run_dynamic.sh` starts the dynamic apache container

Then get the ipaddress as follows

* `docker inspect jl_apache_php | grep '"IPAddress"' | head -n 1`

* `docker inspect jl_express_dynamic | grep '"IPAddress"' | head -n 1`

then modify the 001-reverse-proxy.conf file in ./docker-images/apache-revers-proxy/conf/site-available
as follows
```
<VirtualHost *:80>
    ServerName demo.res.ch

    ProxyPass "/api/students/" "http://1{dynamic_ip}:3000"
    ProxyPassReverse "/api/students/" "http://dynamic_ip:3000"

    ProxyPass "/" "http://{static_ip}]:80"
    ProxyPassReverse "/" "http://{static_ip}:80"

</VirtualHost>
```
## unix
* `./run.sh` will start new containers in the correct order
* `./start.sh` will start previously created containers
* `./stop.sh` will stop containers that are running
* `./clean.sh` will remove the containers
* `./run_static.sh` starts the static  apache container
* `./run_dynamic.sh` starts the dynamic apache container
* `./run_reverse_proxy.sh` starts the reverse proxy container

# ports
reverse proxy container listens on port `80` 

the ports are mapped as follows `8080:80`
# how to use
open a navigator and enter `http://demo.res.ch:8080`
