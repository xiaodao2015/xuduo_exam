package com.exam.control.test;

import org.bson.Document;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mongodb.MongoClient;
import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoCursor;
import com.mongodb.client.MongoDatabase;

@RestController
public class Test {
	protected static final Logger logger = LoggerFactory.getLogger(Test.class);
	@RequestMapping("/")
	public String Hell() {
		logger.debug("xuduo");
		return "hello xuduo4";
	}
	
	public static void main(String[] args) {
		try {
			// 连接到 mongodb 服务
	         MongoClient mongoClient = new MongoClient( "localhost" , 27017 );
	       
	         // 连接到数据库
	         MongoDatabase mongoDatabase = mongoClient.getDatabase("test");  
	       System.out.println("Connect to database successfully");
	      
	       MongoCollection<Document> collection = mongoDatabase.getCollection("runoob");
	       
	       System.out.println("集合 runoob 选择成功"); 
	       
	       FindIterable<Document> findIterable = collection.find();
	       
	       findIterable =  findIterable.skip(1).limit(1);
	       MongoCursor<Document> mongoCursor = findIterable.iterator();  
	         while(mongoCursor.hasNext()){ 
	        	 Document doc =  mongoCursor.next();
	            System.out.println(doc.get("_id"));
	            System.out.println(doc.get("name"));
	            System.out.println(doc.toJson());
	         } 
			
		} catch (Exception e) {
			// TODO: handle exception
			
		}
	}
}
