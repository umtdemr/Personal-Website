push_git:
	@echo "Creating requirements.txt"
	git add .
	git commit -m "$(c)"
	git push
