# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) Below is the Blogpost controller and the index method. The controller is where we define what we want to happen when a method is reached.We al have the index method,it is a controller method, which will access all the items from the database.

class BlogPostsController < ApplicationController
  def index
    # ---2) In here you can see an active record call, which will save all the content from the database as an instance variable. In this case the instance variable called posts, holds the active record query BlogPost.all.

    @posts = BlogPost.all
  end

  # ---3) This is the show method it is a controller method.Inside the show method, you can see  the active record call that will find an item by id. In this case, the instance variable post,will find the desired item from Blogpost by id from params. This method will displayed the desired item

  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) This is the new method,  inside the new method, we have an instance variable that holds the value of BlogPost.new. This is the connection to our form.

  def new
    @post = BlogPost.new
  end

  def create
    # ---5) Inside the create method , we have an instance variable called post, which will contain the action of BlogPost.create.The method blog_post_params is being called by the create method. Inside is a conditional stating if post id valid(true), redirect to blog_post path(index page).Else, redirect to new_blog_post?
    #  There an if but no else, wanted to include this so the user is redirected to another page.

    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ---6) In here we are looking to find the Blog_post by id, because edit has to have which item we will be editing. In this case, the instance variable post,will find the desired item from Blogpost by id from params.This is describing the view of the form but still need params because we are updating one post.
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)In here we are identifying our blog_post by id, and are passing strong params to make changes in our database. The conditional if our new updated post is valid, redirect to the show page.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8) This conditional , is redirecting to the index page blog_post. After redirecting, we should see that the desired item we wanted to be deleted is no longer there. If post id destroy, redirect to the index page(Blog_post_path)(should see visual feedback that item deleted no longer exist) Else, redirect to blog_post_path?
      #  Again no else is visible, but user need to be redirected somewhere. Would love feed back on both this one and number 5.
      redirect_to blog_posts_path
    end
  end

  # ---9) This is strong params method, it is a special method that is only allowed to be called in the context of a particular class. The key word private protects anything below it from being accessed outside the scope of our class. This is used to increase the security of your application, to help prevent allowing users to update sensitive model attributes.
  private
  def blog_post_params
    # ---10) In this line of code, inside the strong params, we require that blog_post permits only the title and content to be updated by the user. 
    params.require(:blog_post).permit(:title, :content)
  end
end
