 CREATE TABLE public.blog_article (                                       
     id integer DEFAULT nextval('blog_article_id_seq'::regclass) NOT NULL,
     title character varying(250)  NULL,                                  
     sub_title character varying(450)  NULL,                              
     main_content text  NULL,                                             
     user_id character varying(250)  NULL,                                
     create_on_date date  NULL);