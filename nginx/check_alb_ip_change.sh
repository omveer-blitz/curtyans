#!/bin/bash
PATH=/usr/sbin:/usr/bin:/sbin:/bin
ips=`nslookup internal-web-docker-alb-1462354629.ap-south-1.elb.amazonaws.com | grep "Address" | awk -F': ' '{ if (NR != 1) print $2}'`
echo $ips > /tmp/latest_app
a=`cat /tmp/latest_app | tr " " "\n"|sort|tr "\n" " "`
b=`cat /tmp/old_app | tr " " "\n"|sort|tr "\n" " "`
if [ "$a" == "$b" ];
then
    echo 'ALB IP unchanged on '$(date)', current IP: '$a''
else
    text='ALBs ip is changed. Old: '$b' New: '$a' Reloading Nginx.'
    echo $text
    curl -X POST --data-urlencode 'payload={"channel": "#auto-scale", "username": "alb-ip-change(prod-nginx)", "text": "'"$text"'", "icon_emoji": ":rube:"}' https://hooks.slack.com/services/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
    echo $a > /tmp/old_app
    sudo nginx -s reload
fi
